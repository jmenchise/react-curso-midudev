import React, { createContext, useState } from 'react'

export const CartContext = createContext();


const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = product => {
      const productInCartIndex = cart.findIndex(item => item.id === product.id);
      if (productInCartIndex >= 0) {
         const newCart = structuredClone(cart);
         // la función structuredClone hace una copia profunda de arrays y objetos. O sea estamos copiando el array
         newCart[productInCartIndex].count = newCart[productInCartIndex].count + 1;
         setCart(newCart);
         return;
      };

      setCart([...cart, { ...product, count: 1 }]);
   };

   const removeFromCart = product => {
      setCart(cart.filter(item => item.id !== product.id));
   };

   const clearCart = () => setCart([]);

   return (
      <CartContext.Provider value={{
         cart,
         addToCart,
         removeFromCart,
         clearCart
      }}>
         {children}
      </CartContext.Provider>
   )
}

export default CartProvider
