import React from 'react'
import { Link } from '../components/Link'

const AboutPage = () => {
   return (
      <>
         <h1>Nosotros</h1>
         <p>Hola! me llamo Joan Menchise y estoy creando un React Router</p>
         <Link to={'/'} > Ir a Inicio</Link>
      </>
   )
}

export default AboutPage