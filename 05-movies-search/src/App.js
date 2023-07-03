import './App.css';
import responseMoviesExample from './mock/response-with-results.json';
import noResults from './mock/response-without-results.json';

function App() {
  const movies = responseMoviesExample.Search;


  return (
    <div className="App">
      <header>
        <h1>Buscador de Películas</h1>
        <form>
          <input type='text' placeholder='Avengers, Star Wars, The Matrix...' />
          <button>Buscar </button>
        </form>
      </header>

      <main>
        {
          movies?.length > 0 ?
          (<ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
                <img src={movie.Poster} title={movie.Title} />
              </li>
            ))}
          </ul>)
          :
          <h2>No se encontraron resultados.</h2>
        }
      </main>
    </div>
  );
}

export default App;
