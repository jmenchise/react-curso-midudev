import './App.css'
import { Suspense, lazy } from 'react';
import Router from './router/Router';
import Route from './router/Route';


const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));
const Page404 = lazy(() => import('./pages/Page404.jsx'));
//con Lazy lo que hacemos es que el callback (el import en ese caso) solo
//se va a ejecutar cuando tengamos que renderizar el componente.
//es decir que solo se ejecuta el import cuando querramos acceder al componente
//por último, todo lo que esté pendiente de cargarse tiene que estar dentro de un componente
//llamado <Suspense>, para avisarle a React que todo lo que está ahí adentro no va a estar
//disponible desde el principio.

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
];

function App() {


  return (
    <main>
      <Suspense>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path={'/'} Component={HomePage} />
          <Route path={'/about'} Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
