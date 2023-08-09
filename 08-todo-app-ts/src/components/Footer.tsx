/* eslint-disable @typescript-eslint/indent */
import React from 'react'

const Footer: React.FC<Props> = () => {
   return (
      <footer className="footer">
         <span className='todo-count'>
            <strong>{todos.length}</strong> tareas Pendientes
         </span>
      </footer>
   )
}

export default Footer
