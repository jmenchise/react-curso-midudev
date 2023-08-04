import React from 'react'
import { Link } from '../components/Link'

const Page404 = () => {
   return (
      <>
         <div>
            <h1>This is NOT fine</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif" alt="gif del perro" />
         </div>
         <Link to={'/'}> Volver al inicio </Link>
      </>
   )
}

export default Page404