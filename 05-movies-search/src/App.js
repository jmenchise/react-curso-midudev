import { useCallback, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import useSearch from './hooks/useSearch';
import useMovies from './hooks/useMovies';
import debounce from 'just-debounce-it';


function App() {
  const [sort, setSort] = useState(false);
  const { error, query, setQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ sort });


  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies(query);
    }, 300)
    , []);

  const handleChange = e => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) {
      return;
    };
    setQuery(newQuery);
    debouncedGetMovies(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('query:', query);
    getMovies(query);
    // De esta forma recupero la información del formulario en el submit pero exclusivamente con JavaScript.
    // const newForm = new FormData(e.target);
    // const { query } = Object.fromEntries(newForm);
    // console.log('query:', query);
    // Hay otra forma, que es directamente desde el input con un handleChange y useState.
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="App">
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={e => handleSubmit(e)} autoComplete='off' >
          <input onChange={e => { handleChange(e) }} value={query} name='query' type='text' placeholder='Avengers, Star Wars, The Matrix...' />
          <input type='checkbox' onChange={handleSort} checked={sort} ></input>
          <button>Buscar </button>
        </form>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ?
          <p>Cargando...</p>
          :
          movies?.length > 0 ?
            <MovieList movies={movies} />
            :
            <h2>No se encontraron resultados.</h2>
        }
      </main>
    </div>
  );
};

export default App;
