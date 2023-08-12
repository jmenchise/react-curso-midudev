/* eslint-disable @typescript-eslint/indent */
import { type TODO_FILTERS } from './consts'
export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type ListOfTodos = Todo[]

export type TodoTitle = Pick<Todo, 'title'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
export interface ContextTodoType {
   todos?: ListOfTodos
   setTodos?: Dispatch<SetStateAction>
}

export interface ContextFilterType {
   filterSelected?: FilterValue
   setFilterSelected?: Dispatch<SetStateAction>
}

export interface UseFiltersType {
   filterSelected: FilterValue
   handleFilterChange: (filter: FilterValue) => void
   activeCount: (todos: ListOfTodos) => number
   completedCount: (todos: ListOfTodos) => number
   filteredTodos: (todos: ListOfTodos) => ListOfTodos
}

export interface UseTodosType {
   todos: ListOfTodos
   handleRemove: ({ id }: Pick<Todo, 'id'>) => void
   handleComplete: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
   handleRemoveAllCompleted: () => void
   handleAddTodo: ({ title }: TodoTitle) => void
}
