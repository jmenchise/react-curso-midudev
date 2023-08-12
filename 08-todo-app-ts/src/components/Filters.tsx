/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'
import useFilters from '../hooks/useFilters'

const Filters: React.FC = () => {
   const { filterSelected, handleFilterChange } = useFilters()
   return (
      <ul className="filters">
         {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => (
            <li className={key === filterSelected ? 'selected' : ''} key={key}>
               <a
                  href={href}
                  onClick={e => {
                     e.preventDefault()
                     handleFilterChange(key as FilterValue)
                  }}
               >
                  {literal}
               </a>
            </li>
         ))}
      </ul>
   )
}

export default Filters
