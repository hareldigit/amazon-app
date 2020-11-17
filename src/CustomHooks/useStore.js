import React , {useState,useEffect} from 'react'
import { db } from '../firebase'
import useUser from '../CustomHooks/useUser'
import { useStateValue } from '../StateProvider'

function useStore() {
  const [user] = useUser()
  const [{ basket }] = useStateValue()

  const [userOrders,setUserOrders] = useState([]);

  function saveOrder(orderId, amount, createdAt) {
    db.collection('users').doc(user?.uid).collection('orders').doc(orderId).set({
      basket: basket,
      amount: amount,
      created: createdAt,
    })
  }
  
  useEffect(()=>{
    if(user?.uid){
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot(snapshot=>(
          setUserOrders(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
          })))
      ))
    }
    else{
      setUserOrders([]);
    }
  },[user,basket])

  return [saveOrder,userOrders]
}

export default useStore
