/* eslint-disable @typescript-eslint/indent */
import React, { createContext, useState } from 'react'
import { type ContextFilterType, type FilterValue } from '../types'
import { TODO_FILTERS } from '../consts'

export const FiltersContext = createContext<ContextFilterType>({})

interface Props {
   children: JSX.Element
}

const FiltersProvider: React.FC<Props> = ({ children }) => {
   const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

   return (
      <FiltersContext.Provider value={{
         filterSelected,
         setFilterSelected
      }}>
         {children}
      </FiltersContext.Provider>
   )
}

export default FiltersProvider
