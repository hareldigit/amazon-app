import React from 'react'
import './Subtotal.css'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import { useStateValue } from '../../StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  const totalPrice = (total, item) =>
    total + (item?.price * item?.quantity ?? 0)
  const totalQuantity = (total, item) => total + (item?.quantity ?? 0)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.reduce(totalQuantity, 0)} items){' '}
              <strong>{basket?.reduce(totalPrice, 0)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
