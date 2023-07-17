import { API_KEY } from "../config";

export async function searchMovies(query) {
   if (query === '') {
      return;
   };
   try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const jsonResponse = await response.json();
      const results = jsonResponse.Search;
      return results?.map(movie => ({
         id: movie.imdbID,
         title: movie.Title,
         year: movie.Year,
         poster: movie.Poster
      }));
   } catch (error) {
      throw new Error('Error al buscar las películas');
   };
};
