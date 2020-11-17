import React from 'react'
import './Order'

function Order({order}) {
    return (
        <div className="order">
            {order.data.amount/100}$
        </div>
    )
}

export default Order
