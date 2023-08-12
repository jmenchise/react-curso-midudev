/* eslint-disable @typescript-eslint/indent */
import React, { createContext, useState } from 'react'
import { type ListOfTodos, type ContextTodoType } from '../types'

interface Props {
   children: JSX.Element
}

export const TodosContext = createContext<ContextTodoType>({})

const TodosProvider: React.FC<Props> = ({ children }) => {
   const [todos, setTodos] = useState((): ListOfTodos => {
      const TodosFromStorage = window.localStorage.getItem('todos')
      return (TodosFromStorage != null) ? JSON.parse(TodosFromStorage) : []
   })

   return (
      <TodosContext.Provider value={{
         todos,
         setTodos
      }}>
         {children}
      </TodosContext.Provider>
   )
}

export default TodosProvider
