import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';



const useMovies = ({ sort }) => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const previousQuery = useRef();

   // const getMovies = useMemo(() => {
   //    return async query => {
   //       if (query === previousQuery.current) {
   //          return;
   //       };
   //       try {
   //          setLoading(true);
   //          setError(null);
   //          previousQuery.current = query;
   //          const newMovies = await searchMovies(query);
   //          setMovies(newMovies);
   //       } catch (error) {
   //          setError(error.message);
   //       } finally {
   //          setLoading(false);
   //       };
   //    };
   // }, []);

   const getMovies = useCallback(async query => {
      if (query === previousQuery.current) {
         return;
      };
      try {
         setLoading(true);
         setError(null);
         previousQuery.current = query;
         const newMovies = await searchMovies(query);
         setMovies(newMovies);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      };
   }, []);
   // Se puede utilizar tanto useMemo como useCallback. con useMemo debo pasar una función que retorne un callback
   // y con useCallback directamente le paso el callback que quiero guardar.



   const sortedMovies = useMemo(() => {
      return sort ?
         [...movies].sort((a, b) => a.title.localeCompare(b.title))
         : movies
   }, [sort, movies]);


   return {
      movies: sortedMovies,
      getMovies,
      error,
      loading
   };
};

export default useMovies;