/* eslint-disable @typescript-eslint/indent */
import { useContext } from 'react'
import { TodosContext } from '../context/TodosProvider'
import { type HandleRemoveType, type HandleCompleteType } from '../types'

const useTodos = (): any => {
   const { todos, setTodos } = useContext(TodosContext)

   const handleRemove: HandleRemoveType = ({ id }) => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
   }

   const handleComplete: HandleCompleteType = ({ id, completed }) => {
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
   return {
      todos,
      handleComplete,
      handleRemove
   }
}

export default useTodos
