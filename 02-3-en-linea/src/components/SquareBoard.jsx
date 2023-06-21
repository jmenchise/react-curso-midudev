import React from 'react'

const SquareBoard = ({ children, updateBoard, isSelected, index }) => {
   
   const handleClick = () => {
         updateBoard(index);
         /* TODO: updateBoard solo debe poder utilizarse en el tablero.
            y no en el componente de turnos ni en el de Winner
         */
   }

   return (
      <div onClick={handleClick}>
         <span className={`square ${isSelected ? 'is-selected' : ''}`}>
            {children}
         </span>
      </div>
   );
}

export default SquareBoard