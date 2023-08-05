

const CartItem = ({ thumbnail, title, price, count, addToCart }) => {

   return (
      <li>
         <img src={thumbnail} alt={title} />
         <div>
            <strong>{title}</strong> - ${price}
         </div>
         <footer>
            <small>
               Cantidad: {count}
            </small>
            <button onClick={addToCart}>+</button>
         </footer>
      </li>
   )
}

export default CartItem