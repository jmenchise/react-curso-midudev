/* eslint-disable @typescript-eslint/indent */
export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Todo[]
