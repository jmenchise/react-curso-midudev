/* eslint-disable @typescript-eslint/indent */
export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type ListOfTodos = Todo[]

export type HandleRemoveType = ({ id }: Pick<Todo, 'id'>) => void

export type HandleCompleteType = ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void

export interface Context {
   todos: ListOfTodos
   setTodos: Dispatch<SetStateAction>
}
