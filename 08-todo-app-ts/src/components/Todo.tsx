/* eslint-disable @typescript-eslint/indent */
import { useContext } from 'react'
import { TodosContext } from '../context/TodosProvider'
import { type Todo as Props } from '../types'

const Todo = ({ id, title, completed }: Props): JSX.Element => {
   const { handleRemove } = useContext<any>(TodosContext)
   return (
      <div className="view">
         <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => { }}
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
