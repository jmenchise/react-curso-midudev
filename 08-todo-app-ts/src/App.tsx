/* eslint-disable indent */
import { useContext } from 'react'
import { Todos } from './components/Todos'
import { TodosContext } from './context/TodosProvider'
import { type Context } from './types'

const App = (): JSX.Element => {
  const { todos } = useContext<Context>(TodosContext)
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
      />
    </div>
  )
}

export default App
