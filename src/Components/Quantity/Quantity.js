import React from 'react'
import './Quantity.css'
import { useStateValue } from '../../StateProvider'

function Quantity({ id, quantity, editMode }) {
  const [{ basket }, dispatch] = useStateValue()
  const changeQuantity = (event) => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      item: {
        id,
        quantity: +event.target.value,
      },
    })
  }
  return (
    <div className="quantity">
      Qty:{' '}
      {editMode ? (
        <input type="number" onChange={changeQuantity} value={quantity} />
      ) : (
        <span>{quantity}</span>
      )}
    </div>
  )
}

export default Quantity
