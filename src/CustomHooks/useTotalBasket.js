import { useState, useEffect } from 'react'
import { useStateValue } from '../StateProvider'

function useTotalBasket() {
  const [{ basket }, dispatch] = useStateValue()
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const totalPriceAction = (total, item) =>
      total + (item?.price * item?.quantity ?? 0)
    setTotalPrice(basket?.reduce(totalPriceAction, 0))

    const totalQuantityAction = (total, item) => total + (item?.quantity ?? 0)
    setTotalQuantity(basket?.reduce(totalQuantityAction, 0))
  }, [basket])
  return [totalPrice, totalQuantity]
}

export default useTotalBasket
