import React from 'react';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons';
import { checkIfIsInArr } from '../../utilities';
import useCart from '../../hooks/useCart';

const Products = ({ products }) => {

   const { cart, addToCart, removeFromCart } = useCart();

   return (
      <main className="products">
         <ul>
            {products.map(product => {
               const isItemInArr = checkIfIsInArr(product, cart);
               return (
                  <li key={product.id}>
                     <img src={product.thumbnail} alt={product.title} />
                     <div>
                        <strong>{product.title}</strong> - ${product.price}
                     </div>
                     <div>
                        <button
                           style={{ backgroundColor: isItemInArr ? 'red' : '#09f' }}
                           onClick={() => {
                              isItemInArr ? removeFromCart(product) : addToCart(product);
                           }}
                        >
                           {isItemInArr ?
                              <RemoveFromCartIcon />
                              : <AddToCartIcon />
                           }
                        </button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </main>
   )
}

export default Products