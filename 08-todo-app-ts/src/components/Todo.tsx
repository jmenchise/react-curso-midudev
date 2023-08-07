/* eslint-disable @typescript-eslint/indent */
import { useContext } from 'react'
import { TodosContext } from '../context/TodosProvider'
import { type Context, type Todo as TodoType } from '../types'

const Todo = ({ id, title, completed }: TodoType): JSX.Element => {
   const { handleRemove, handleComplete } = useContext<Context>(TodosContext)
   return (
      <div className="view">
         <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={e => { handleComplete({ id, completed: e.target.checked }) }}
         />
         <label htmlFor="">{title}</label>
         <button
            className='destroy'
            onClick={() => { handleRemove({ id }) }}
         />
      </div>
   )
}

export default Todo
