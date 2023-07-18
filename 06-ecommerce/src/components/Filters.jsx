import './Filters.css';
import React, { useState } from 'react';

const Filters = () => {
   const [minPrice, setMinPrice] = useState(0);

   const handleChangePrice = e => setMinPrice(e.target.value);

   return (
      <section className="filters">
         <div>
            <label htmlFor="price">Precio mímino</label>
            <input type="range"
               id='price'
               min={0}
               max={1000}
               onChange={e => { handleChangePrice(e) }}
            />
            <span>{minPrice}</span>
         </div>
         <div>
            <label htmlFor="category">Categorias</label>
            <select name="category" id="category">
               <option value="all">Todas</option>
               <option value="laptops">Netbooks</option>
               <option value="smartphones">Celulares</option>
            </select>
         </div>
      </section>
   )
}

export default Filters