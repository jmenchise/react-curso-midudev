import './Footer.css'
import useFilters from '../../hooks/useFilters';

const Footer = () => {

   const { filters } = useFilters();

   return (
      <footer className="footer">
         {
            JSON.stringify(filters, null, 2)
         }
         {
            /* <h4>Prueba Técnica React * - <span>@midudev</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5> */
         }
      </footer>
   );
};

export default Footer