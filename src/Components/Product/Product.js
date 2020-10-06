import React from 'react'
import './Product.css'

import { useStateValue } from '../../StateProvider'

function Product({
  id,
  title,
  image,
  price,
  rating,
  includeAddToBasket,
  includeRemoveFromBasket,
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="">
                🌟
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      {includeAddToBasket && (
        <button onClick={addToBasket}>Add to Basket</button>
      )}
      {includeRemoveFromBasket && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
      )}
    </div>
  )
}

export default Product
