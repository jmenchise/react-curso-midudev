/* eslint-disable @typescript-eslint/indent */
import React, { createContext, useState } from 'react'
import { type TodoId } from '../types'

export const TodosContext = createContext({})

interface Props {
   children: JSX.Element
}

const TodosProvider: React.FC<Props> = ({ children }) => {
   const mockTodos = [
      {
         id: '1',
         title: 'Decirle a Meli que la amas',
         completed: false
      },
      {
         id: '2',
         title: 'Darle un beso a la gorda',
         completed: false
      },
      {
         id: '3',
         title: 'Darle un beso a los gorditos',
         completed: false
      }
   ]
   const [todos, setTodos] = useState(mockTodos)

   const handleRemove = ({ id }: TodoId): void => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
   }

   return (
      <TodosContext.Provider value={{
         todos,
         handleRemove
      }}>
         {children}
      </TodosContext.Provider>
   )
}

export default TodosProvider
