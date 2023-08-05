import useFilters from '../../hooks/useFilters';
import './Filters.css';

const Filters = () => {
   const { filters, changeFilterCategory, changeFilterPrice } = useFilters();

   //puedo hacerlo de esta forma, importando del context el setFilters y manipular los filtros desde acá,
   //o sino sacar la lógica de la manipulación del estado y llevarla al useFilters, y de ahí al context,
   //entonces acá solo cambio los filtros; el "como cambian", que sea problema del useFilters y no 
   //del componente en sí.

   // const handleChangePrice = e => {
   //    setFilters(prevState => ({
   //       ...prevState,
   //       minPrice: e.target.value
   //    }));
   // };

   // const handleChangeCategory = e => {
   //    setFilters(prevState => ({
   //       ...prevState,
   //       category: e.target.value
   //    }));
   // };

   return (
      <section className="filters">
         <div>
            <label htmlFor="price">Precio mímino</label>
            <input type="range"
               id='price'
               min={0}
               max={1000}
               onChange={changeFilterPrice}
               value={filters.minPrice}
            />
            <span>{filters.minPrice}</span>
         </div>
         <div>
            <label htmlFor="category">Categorias</label>
            <select name="category" id="category" onChange={changeFilterCategory}>
               <option value="all">Todas</option>
               <option value="laptops">Netbooks</option>
               <option value="smartphones">Celulares</option>
            </select>
         </div>
      </section>
   )
}

export default Filters