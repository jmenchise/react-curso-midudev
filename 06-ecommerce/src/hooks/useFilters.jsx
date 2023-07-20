import { useContext } from "react"
import { FiltersContext } from "../context/FiltersProvider"


const useFilters = () => {

   const { filters, setFilters } = useContext(FiltersContext);

   const filterProducts = products => {
      return products.filter(product => (
         product.price >= filters.minPrice &&
         (
            filters.category === 'all' ||
            product.category === filters.category
         )
      ));
   };

   const changeFilterPrice = e => {
      setFilters(filters => ({
         ...filters,
         minPrice: e.target.value
      }));
   };

   const changeFilterCategory = e => {
      setFilters(filters => ({
         ...filters,
         category: e.target.value
      }));
   };


   return {
      filterProducts,
      setFilters,
      filters,
      changeFilterCategory,
      changeFilterPrice
   }
}

export default useFilters