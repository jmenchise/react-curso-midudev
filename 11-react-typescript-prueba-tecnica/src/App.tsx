import { useEffect, useState } from 'react';
import './App.css';
import { type User } from './types.d';
import { UsersList } from './components/UsersList';

function App() {
   const [users, setUsers] = useState<User[]>([]);
   const [showRows, setShowRows] = useState(false);

   const toggleShowRows = () => {
      setShowRows(!showRows);
   };
   useEffect(() => {
      fetch('https://randomuser.me/api/?results=100')
         .then(async res => await res.json())
         .then(data => {
            setUsers(data.results);
         })
         .catch(err => {
            console.log(err);
         });
   }, []);

   return (
      <div className='App'>
         <h1>Prueba Técnica</h1>
         <header>
            <button onClick={toggleShowRows}>Colorear Filas</button>
         </header>
         <main>
            <UsersList
               showRows={showRows}
               users={users}
            />
         </main>
      </div>
   );
}

export default App;
