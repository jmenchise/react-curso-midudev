/* eslint-disable @typescript-eslint/indent */
import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersProvider'
import { type UseFiltersType, type FilterValue, type ListOfTodos } from '../types'
import { TODO_FILTERS } from '../consts'

const useFilters = (): UseFiltersType => {
   const { filterSelected = 'all', setFilterSelected } = useContext(FiltersContext)

   const handleFilterChange = (filter: FilterValue): void => {
      setFilterSelected(filter)
   }
   const activeCount = (todos: ListOfTodos): number => todos.filter(todo => !todo.completed).length
   const completedCount = (todos: ListOfTodos): number => todos.length - activeCount(todos)
   const filteredTodos = (todos: ListOfTodos): ListOfTodos => {
      return todos.filter(todo => {
         if (filterSelected === TODO_FILTERS.ACTIVE) {
            return !todo.completed
         }
         if (filterSelected === TODO_FILTERS.COMPLETED) {
            return todo.completed
         }
         return todo
      })
   }
   return {
      filterSelected,
      handleFilterChange,
      filteredTodos,
      activeCount,
      completedCount
   }
}

export default useFilters
