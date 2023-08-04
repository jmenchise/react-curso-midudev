import React from 'react'
import { Link } from '../components/Link'

const SearchPage = ({ routeParams }) => {
   return (
      <>
         <h1>Has Buscado: {routeParams.query}</h1>
         <Link to={'/'}> Volver al inicio </Link>
      </>
   )
}

export default SearchPage