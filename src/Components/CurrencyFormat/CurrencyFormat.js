import React from 'react'

function CurrencyFormat({ renderText, value, prefix }) {
  return <div>{renderText(value, prefix)}</div>
}

export default CurrencyFormat
