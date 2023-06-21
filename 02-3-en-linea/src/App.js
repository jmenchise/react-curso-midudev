import './App.css';
import WinnerModal from './components/WinnerModal';
import useGame from './hooks/useGame';
import TurnSection from './components/TurnSection';
import BoardGame from './components/BoardGame';
import ResetButton from './shared/ResetButton';



export default function App() {

  const { board, turn, winner, resetGame, updateBoard } = useGame();

  return (
    <div className="App">
      <main className='board'>
        <h1>3 En Linea - TA TE TI</h1>
        <ResetButton resetGame={resetGame} />
        {<BoardGame board={board} updateBoard={updateBoard} />}
        {<TurnSection turn={turn} />}
        {
          winner !== null &&
          <WinnerModal winner={winner} resetGame={resetGame} />
        }
      </main>
    </div>
  );
}
