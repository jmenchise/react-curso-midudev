/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import Filters from './Filters'
import useTodos from '../hooks/useTodos'
import useFilters from '../hooks/useFilters'

const Footer: React.FC = () => {
   const { todos, handleRemoveAllCompleted } = useTodos()
   const { activeCount, completedCount } = useFilters()

   return (
      <footer className="footer">
         <span className='todo-count'>
            <strong>{activeCount(todos)}</strong> tareas Pendientes
         </span>
         <Filters />
         {
            completedCount(todos) > 0 && (
               <button
                  className="clear-completed"
                  onClick={handleRemoveAllCompleted}
               >
                  borrar completadas
               </button>
            )
         }
      </footer>
   )
}

export default Footer
