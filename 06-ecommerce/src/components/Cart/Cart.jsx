import React from 'react';
import { CartIcon, ClearCartIcon } from '../Icons/Icons';
import './Cart.css';
import useCart from '../../hooks/useCart';

const Cart = () => {
   const { cart, clearCart, addToCart } = useCart();
   
   return (
      <div>
         <label htmlFor="cart" className="cart-button">
            <CartIcon />
         </label>
         <input type="checkbox" id='cart' hidden />
         <aside className="cart">
            <ul>
               {cart.map(product => (
                  <li>
                     <img src={product.thumbnail} alt={product.title} />
                     <div>
                        <strong>{product.title}</strong> - ${product.price}
                     </div>
                     <footer>
                        <small>
                           Cantidad: {product.count}
                        </small>
                        <button onClick={() => { addToCart(product) }}>+</button>
                     </footer>
                  </li>
               ))}
            </ul>
            <button onClick={clearCart}>
               <ClearCartIcon />
            </button>
         </aside>
      </div>
   )
}

export default Cart