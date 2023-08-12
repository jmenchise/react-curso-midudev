/* eslint-disable @typescript-eslint/indent */
import { useContext } from 'react'
import { TodosContext } from '../context/TodosProvider'
import { type TodoTitle, type UseTodosType, type Todo, type ListOfTodos } from '../types'

const useTodos = (): UseTodosType => {
   const { todos = [], setTodos } = useContext(TodosContext)

   const saveTodosToStorage = (todosToSave: ListOfTodos): void => {
      window.localStorage.setItem('todos', JSON.stringify(todosToSave))
   }

   const handleRemove = ({ id }: Pick<Todo, 'id'>): void => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
      saveTodosToStorage(newTodos)
   }

   const handleComplete = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
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
      saveTodosToStorage(newTodos)
   }

   const handleRemoveAllCompleted = (): void => {
      const newTodos = todos.filter((todo) => !todo.completed)
      setTodos(newTodos)
      saveTodosToStorage(newTodos)
   }

   const handleAddTodo = ({ title }: TodoTitle): void => {
      const newTodo = {
         id: crypto.randomUUID(),
         title,
         completed: false
      }

      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
      saveTodosToStorage(newTodos)
   }

   return {
      todos,
      handleRemove,
      handleComplete,
      handleRemoveAllCompleted,
      handleAddTodo
   }
}

export default useTodos
