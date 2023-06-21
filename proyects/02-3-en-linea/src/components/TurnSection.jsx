import React from 'react'
import { TURNS } from '../const'
import SquareBoard from './SquareBoard'

const TurnSection = ({ turn }) => {

   return (
      <section className='turn'>
         {<SquareBoard isSelected={turn === TURNS.X}>{TURNS.X}</SquareBoard>}
         {<SquareBoard isSelected={turn === TURNS.O}>{TURNS.O}</SquareBoard>}
      </section>
   )
}

export default TurnSection