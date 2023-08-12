/* eslint-disable indent */
import { Todos } from './components/Todos'
import useTodos from './hooks/useTodos'
import Footer from './components/Footer'
import Header from './components/Header'
import useFilters from './hooks/useFilters'

const App = (): JSX.Element => {
  const { todos } = useTodos()
  const { filteredTodos } = useFilters()

  return (
    <div className="todoapp">
      <Header />
      <Todos
        todos={filteredTodos(todos)}
      />
      <Footer />
    </div>
  )
}

export default App
