import React, { useState, useEffect } from 'react'
import './Payment.css'
import useUser from '../../CustomHooks/useUser'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import useTotalBasket from '../../CustomHooks/useTotalBasket'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import axios from '../../axios'
import { db } from '../../firebase'

function Payment() {
  const [user, userName, handleAuthentication] = useUser()
  const [{ basket }, dispatch] = useStateValue()
  const [totalPrice, totalQuantity] = useTotalBasket()
  const stripe = useStripe()
  const elements = useElements()

  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(null)
  const [clientSecret, setClientSecret] = useState(null)
  const history = useHistory()

  useEffect(() => {
    if (totalPrice > 0) {
      const getClientSecret = async () => {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${totalPrice * 100}`,
        })
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret()
    }
  }, [totalPrice])

  console.log('secret is >>>>>', clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)
    if (clientSecret != null) {
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then((response) => {
          if (response.paymentIntent?.id) {
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(response.paymentIntent.id)
              .set({
                basket: basket,
                amount: response.paymentIntent.amount,
                created: response.paymentIntent.created,
              })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
              type: 'EMPTY_BASKET',
            })

            history.push('/orders')
          } else {
            setError(response.error ? response.error.message : '')
          }
        })
    }
  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{totalQuantity}</Link>} Items</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lena</p>
            <p>Los AngeLes, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item, i) => (
              <React.Fragment key={i}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  quantity={item.quantity}
                  editMode={false}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(innerValue, innerPrefix) => (
                    <>
                      <h3>
                        Order Total: {innerValue} {innerPrefix}
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button
                  disabled={
                    !userName ||
                    totalPrice === 0 ||
                    processing ||
                    disabled ||
                    succeeded
                      ? 'disabled'
                      : ''
                  }
                >
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
