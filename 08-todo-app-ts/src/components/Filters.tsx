/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import { type TODO_FILTERS, FILTERS_BUTTONS } from '../consts'

interface Props {
   filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

const Filters: React.FC<Props> = () => {
   return (
      <ul className="filters">
         <li>
            <a>
               Todos
            </a>
         </li>
         <li>
            <a>
               Activos
            </a>
         </li>
         <li>
            <a>
               Completados
            </a>
         </li>
      </ul>
   )
}

export default Filters
