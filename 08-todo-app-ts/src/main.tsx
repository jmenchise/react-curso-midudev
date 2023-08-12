/* eslint-disable indent */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'todomvc-app-css/index.css'
import TodosProvider from './context/TodosProvider.tsx'
import FiltersProvider from './context/FiltersProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </TodosProvider>
  </React.StrictMode>
)
