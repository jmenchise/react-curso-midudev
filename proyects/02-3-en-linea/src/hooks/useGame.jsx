import { useState } from 'react'
import { TURNS, WINNER_COMBINATIONS } from '../const';
import confetti from 'canvas-confetti';

const useGame = () => {
   const [board, setBoard] = useState(Array(9).fill(null));
   const [turn, setTurn] = useState(TURNS.X);
   const [winner, setWinner] = useState(null);


   const checkWinner = (boardToCheck) => {
      for (let combination of WINNER_COMBINATIONS) {
         const [a, b, c] = combination;
         if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
         ) {
            return boardToCheck[a]
         }
      }
      return null
   }

   const checkEndGame = (boardToCheck) => boardToCheck.every(square => square !== null);

   const updateBoard = (index) => {
      if (board[index] || winner) {
         return
      };
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
         confetti();
         setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
         setWinner(false);
      }
   }

   const resetGame = () => {
      setBoard(Array(9).fill(null));
      setTurn(TURNS.X);
      setWinner(null);
   }

   return {
      board,
      turn,
      winner,
      updateBoard,
      resetGame
   }
}

export default useGame