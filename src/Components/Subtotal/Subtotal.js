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
        renderText={(innerValue, innerPrefix) => (
          <>
            <p>
              Subtotal ({totalQuantity} items){' '}
              <strong>
                {innerValue} {innerPrefix}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
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
