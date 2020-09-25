import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/shazam/US-GC-EN-Birthday-House-Ads-1940x500--CB445346298--yJoV4._V445556804_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
