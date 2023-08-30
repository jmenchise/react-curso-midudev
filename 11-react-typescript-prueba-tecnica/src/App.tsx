import { useEffect, useRef, useState } from 'react';
import './App.css';
import { type User } from './types.d';
import { UsersList } from './components/UsersList';

function App() {
   const [users, setUsers] = useState<User[]>([]);
   const [showRows, setShowRows] = useState(false);
   const [sortByCountry, setSortByCountry] = useState(false);
   const originalUsers = useRef<User[]>([]);
   const [filterCountry, setFilterCountry] = useState<string | null>(null);

   const toggleShowRows = () => {
      setShowRows(!showRows);
   };

   const toggleSortByCountry = () => {
      setSortByCountry(!sortByCountry);
   };

   const handleDelete = (email: string) => {
      const filteredUsers = users.filter(user => user.email !== email);
      setUsers(filteredUsers);
   };

   const handleReset = () => {
      setUsers(originalUsers.current);
   };

   useEffect(() => {
      fetch('https://randomuser.me/api/?results=100')
         .then(async res => await res.json())
         .then(data => {
            setUsers(data.results);
            originalUsers.current = data.results;
         })
         .catch(err => {
            console.log(err);
         });
   }, []);

   const filteredUsers = (filterCountry != null && filterCountry.length > 0)
      ? users.filter(user => (
         user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      ))
      : users;

   const sortedUsers = sortByCountry
      ? filteredUsers.sort((a, b) => a.location.country.localeCompare(b.location.country))
      : filteredUsers;
   // * para utilizar el toSorted tengo que definirle el tipado, ya que es un método bastante nuevo
   // * y todavía no tiene los tipos definidos.
   // users.toSorted((a, b) => a.location.country.localeCompare(b.location.country))

   return (
      <div className='App'>
         <h1>Prueba Técnica</h1>
         <header style={
            {
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               gap: '1.5em',
               marginBottom: '1em'
            }
         }>
            <button onClick={toggleShowRows}>Colorear Filas</button>
            <button onClick={toggleSortByCountry}>
               {sortByCountry ? 'No ordenar Por Pais' : 'Ordenar Por Pais'}
            </button>
            <button onClick={handleReset}>Reestablecer estado</button>
            <input
               onChange={(e) => { setFilterCountry(e.target.value); }}
               type="text"
               placeholder='Filtra por país'
            />
         </header>
         <main>
            <UsersList
               showRows={showRows}
               users={sortedUsers}
               handleDelete={handleDelete}
            />
         </main>
      </div>
   );
}

export default App;
