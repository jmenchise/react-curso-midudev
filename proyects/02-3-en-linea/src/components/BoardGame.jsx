import React from 'react'
import SquareBoard from './SquareBoard'

const BoardGame = ({ board, updateBoard }) => {
   return (
      <section className='game'>
         {board.map((square, index) => (
            <SquareBoard
               key={index}
               index={index}
               updateBoard={updateBoard}
            >
               {square}
            </SquareBoard>
         ))}
      </section>
   )
}

export default BoardGame