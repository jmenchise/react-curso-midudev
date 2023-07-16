import React from 'react'

const MovieList = (props) => {
   const { movies } = props;

   return (
      <ul className='movies'>
         {movies.map(({ id, title, year, type, poster }) => (
            <li key={id} className='movie'>
               <h3>{title}</h3>
               <p>{year}</p>
               <p>{type}</p>
               <img src={poster} title={title} alt={title} />
            </li>
         ))}
      </ul>
   )
}

export default MovieList