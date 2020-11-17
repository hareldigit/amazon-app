import React , {useState,useEffect} from 'react'
import './Orders'
import useStore from '../../CustomHooks/useStore'
import Order from '../../Components/Order/Order'

function Orders() {
 const[saveOrder,userOrders] = useStore();
    console.log("userOrders>>>",userOrders)
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order"></div>
      {userOrders?.map((order, i) =>(
         <Order key={i} order={order}/>
      ))}
    </div>
  )
}

export default Orders
