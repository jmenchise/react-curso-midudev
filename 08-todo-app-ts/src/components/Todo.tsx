/* eslint-disable @typescript-eslint/indent */
import { type Todo as TodoType } from '../types'
import useTodos from '../hooks/useTodos'

const Todo = ({ id, title, completed }: TodoType): JSX.Element => {
   const { handleRemove, handleComplete } = useTodos()
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
