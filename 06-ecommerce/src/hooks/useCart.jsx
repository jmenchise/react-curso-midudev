import { useContext } from "react"
import { CartContext } from "../context/CartProvider"

const useCart = () => {

   const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

   return {
      cart,
      addToCart,
      removeFromCart,
      clearCart
   }
}

export default useCart