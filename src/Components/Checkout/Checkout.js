import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../StateProvider'
import useUser from '../../CustomHooks/useUser'
import { useHistory } from 'react-router-dom'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  const [user, userName, handleAuthentication] = useUser()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/shazam/US-GC-EN-Birthday-House-Ads-1940x500--CB445346298--yJoV4._V445556804_.jpg"
          alt=""
        />
        <div>
          <h3 className="checkout__hello">Hello, {userName}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {basket?.map((item, i) => (
          <React.Fragment key={i}>
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              quantity={item.quantity}
              editMode={true}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
