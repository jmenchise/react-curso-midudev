import { useEffect, useRef, useState } from 'react'

const useSearch = () => {
   const [query, setQuery] = useState('');
   const [error, setError] = useState(null);
   const firstInput = useRef(true);

   useEffect(() => {
      if (firstInput.current) {
         firstInput.current = (query === '');
         //con esto definimos un valor para indicar si es el primer input que hace el usuario (al entrar al sitio).
         //con useRef, guardamos un valor que es independiente de los renderizados, o sea que persiste entre ellos
         //durante todo el ciclo de vida del componente. Cuando se actualiza el valor useRef, no se produce 
         //el re render, a diferencia de lo que si sucede con useState.
         //Entonces como en el primer render su valor es TRUE, no sigue con el resto de la función y cambia su valor
         //a false (porque la comparación de query con texto vacío retornaría false), y con esto ya nos 
         //aseguramos que para el resto de los cambios haga las validaciones correspondientes.
         return;
      }
      if (query === '') {
         setError('No se puede buscar una película vacía');
         return;
      };
      if (query.length < 3) {
         setError('La búsqueda debe tener al menos 3 caracteres.');
         return;
      };
      if (query.match(/^\d+$/)) {
         setError('No se puede buscar una película con un número.');
         return;
      };

      setError(null);
   }, [query])



   return {
      query,
      error,
      setQuery
   }
}

export default useSearch