/* eslint-disable indent */
import { Todos } from './components/Todos'
import useTodos from './hooks/useTodos'

const App = (): JSX.Element => {
  const { todos } = useTodos()
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
      />
    </div>
  )
}

export default App
