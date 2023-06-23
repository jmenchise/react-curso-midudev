import React from 'react'
import SquareBoard from './SquareBoard'
import ResetButton from '../shared/ResetButton'

const WinnerModal = ({ winner, resetGame }) => {
   return (
      <section className='winner'>
         <div className='text'>
            <h2>
               {winner === false ? 'Empate!' : 'Ganó:'}
            </h2>
            <header className='win'>
               {winner && <SquareBoard winnerSquare>{winner}</SquareBoard>}
            </header>
            <footer>
               <ResetButton resetGame={resetGame} />
            </footer>
         </div>
      </section>
   )
}

export default WinnerModal