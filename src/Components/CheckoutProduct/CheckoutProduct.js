import React from 'react'
import './CheckoutProduct.css'
import Quantity from '../Quantity/Quantity'
import { useStateValue } from '../../StateProvider'

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  editMode,
  quantity,
}) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id,
      },
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="">
                🌟
              </span>
            ))}
        </div>
        {editMode && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
      <div className="checkoutProduct__quantity">
        <Quantity id={id} editMode={editMode} quantity={quantity} />
      </div>
    </div>
  )
}

export default CheckoutProduct
