import { useEffect, useState } from 'react'
import { Cart } from '../models/cart'

const CartData = () => {
  const [cart, setCart] = useState({})

  useEffect(() => {
    function handleChange () {
      const storedData: Cart = JSON.parse(localStorage.getItem('cart') || '{}')
      setCart(storedData)
    }

    window.addEventListener('cart', handleChange)

    handleChange()

    return () => window.removeEventListener('cart', handleChange)
  }, [])

  return cart
}

export default CartData

