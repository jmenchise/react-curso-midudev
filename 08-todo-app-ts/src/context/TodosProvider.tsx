/* eslint-disable @typescript-eslint/indent */
import React, { createContext, useState } from 'react'
import { type ContextHandleRemoveType, type ContextHandleCompleteType, type Context } from '../types'

const initialState = {
   todos: [],
   handleRemove: () => { },
   handleComplete: () => { }
}
interface Props {
   children: JSX.Element
}

export const TodosContext = createContext<Context>(initialState)

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

   const handleRemove: ContextHandleRemoveType = ({ id }) => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
   }

   const handleComplete: ContextHandleCompleteType = ({ id, completed }) => {
      const newTodos = todos.map(todo => {
         if (todo.id === id) {
            return {
               ...todo,
               completed
            }
         }
         return todo
      })
      setTodos(newTodos)
   }

   return (
      <TodosContext.Provider value={{
         todos,
         handleRemove,
         handleComplete
      }}>
         {children}
      </TodosContext.Provider>
   )
}

export default TodosProvider
