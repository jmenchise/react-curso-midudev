import React from 'react'

const SquareBoard = ({ children, updateBoard, isSelected, index, turnSquare, winnerSquare }) => {

   const handleClick = e => {
      if (
         e.target.classList.contains('turn-square') ||
         e.target.classList.contains('winner-square')
      ) {
         return
      }
      updateBoard(index);
   }

   return (
      <div
         className={
            `${turnSquare ? 'turn-square' : ''}
            ${winnerSquare ? 'winner-square' : ''}`
         }
         onClick={e => { handleClick(e) }}
      >
         <span className={`square ${isSelected ? 'is-selected' : ''}`}>
            {children}
         </span>
      </div>
   );
}

export default SquareBoard