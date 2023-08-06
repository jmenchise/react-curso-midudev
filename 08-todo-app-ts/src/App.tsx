/* eslint-disable indent */
import { useContext } from 'react'
import { Todos } from './components/Todos'
import { TodosContext } from './context/TodosProvider'

const App = (): JSX.Element => {
  const { todos } = useContext<any>(TodosContext)
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
      />
    </div>
  )
}

export default App
