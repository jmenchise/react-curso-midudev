/* eslint-disable @typescript-eslint/indent */
import React, { createContext, useState } from 'react'
import { type Context } from '../types'

const initialState: Context = {
   todos: [{
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
   }],
   setTodos: () => { }
}

interface Props {
   children: JSX.Element
}

export const TodosContext = createContext(initialState)

const TodosProvider: React.FC<Props> = ({ children }) => {
   const [todos, setTodos] = useState(initialState.todos)

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
