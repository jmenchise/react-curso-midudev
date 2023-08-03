import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Router from './components/Router';

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
];

function App() {


  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
