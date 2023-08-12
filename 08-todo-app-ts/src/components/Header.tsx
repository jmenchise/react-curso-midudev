/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import CreateTodo from './CreateTodo'
import useTodos from '../hooks/useTodos'

const Header: React.FC = () => {
   const { handleAddTodo } = useTodos()

   return (
      <header
         className="header"
      >
         <h1 style={{ width: '60px', height: 'auto' }}>Pendientes</h1>
         <CreateTodo saveTodo={handleAddTodo} />
      </header>
   )
}

export default Header
