/* eslint-disable @typescript-eslint/indent */
export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type ListOfTodos = Todo[]

export type ContextHandleRemoveType = ({ id }: Pick<Todo, 'id'>) => void

export type ContextHandleCompleteType = ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void

export interface Context {
   todos: ListOfTodos
   handleRemove: ContextHandleRemoveType
   handleComplete: ContextHandleCompleteType
}
