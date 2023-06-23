import React from 'react'
import { TURNS } from '../const'
import SquareBoard from './SquareBoard'

const TurnSection = ({ turn }) => {

   return (
      <section className='turn'>
         {
            <SquareBoard isSelected={turn === TURNS.X} turnSquare>
               {TURNS.X}
            </SquareBoard>
         }
         {
            <SquareBoard isSelected={turn === TURNS.O} turnSquare>
               {TURNS.O}
            </SquareBoard>
         }
      </section>
   )
}

export default TurnSection