import React from 'react'
import './Subtotal.css'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import useTotalBasket from '../../CustomHooks/useTotalBasket'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const [totalPrice, totalQuantity] = useTotalBasket()
  const history = useHistory()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalQuantity} items) <strong>{totalPrice}</strong>
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
      <button onClick={(e) => history.push('/payment')}>
        proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
