import React from 'react'
import './Payment.css'
import useUser from '../../CustomHooks/useUser'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import useTotalBasket from '../../CustomHooks/useTotalBasket'
import { Link } from 'react-router-dom'

function Payment() {
  const [user, userName, handleAuthentication] = useUser()
  const [{ basket }, dispatch] = useStateValue()
  const [totalPrice, totalQuantity] = useTotalBasket()
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
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  )
}

export default Payment
