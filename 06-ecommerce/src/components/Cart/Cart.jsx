import { CartIcon, ClearCartIcon } from '../Icons/Icons';
import './Cart.css';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

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
                  <CartItem
                     key={product.id}
                     addToCart={() => addToCart(product)}
                     {...product}
                  />
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