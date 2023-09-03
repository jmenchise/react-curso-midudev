import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { SortBy, type User } from './types.d';
import { UsersList } from './components/UsersList';

function App() {
   const [users, setUsers] = useState<User[]>([]);
   const [showRows, setShowRows] = useState(false);
   const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
   const [filterCountry, setFilterCountry] = useState<string | null>();
   const originalUsers = useRef<User[]>([]);

   const toggleShowRows = () => setShowRows(!showRows);

   const handleDelete = (email: string) => {
      const filteredUsers = users.filter(user => user.email !== email);
      setUsers(filteredUsers);
   };

   const handleReset = () => setUsers(originalUsers.current);

   const handlechangeSort = (sort: SortBy) => {
      const newSortingValue = sorting === SortBy.NONE ? sort : SortBy.NONE;
      setSorting(newSortingValue);
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

   const filteredUsers = useMemo(() => {
      return (filterCountry != null && filterCountry.length > 0)
         ? users.filter(user => (
            user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
         ))
         : users;
   }, [users, filterCountry]);

   const sortedUsers = useMemo(() => {
      if (sorting === SortBy.NONE) {
         return filteredUsers;
      }
      if (sorting === SortBy.NAME) {
         return [...filteredUsers].sort((a, b) => a.name.first.localeCompare(b.name.first));
      }
      if (sorting === SortBy.LAST) {
         return [...filteredUsers].sort((a, b) => a.name.last.localeCompare(b.name.last));
      }
      if (sorting === SortBy.COUNTRY) {
         return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(b.location.country));
      }

      return filteredUsers;
   }, [filteredUsers, sorting]);

   //* Tener en cuenta que si utilizamos el sort, hay que hacer una copia del state ya que
   //* modifica el array original, pisando así el estado.
   //* para utilizar el toSorted tengo que definirle el tipado, ya que es un método bastante nuevo
   //* y todavía no tiene los tipos definidos.
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
            <button onClick={() => { handlechangeSort(SortBy.COUNTRY); }}>
               {sorting === SortBy.COUNTRY ? 'No ordenar Por Pais' : 'Ordenar Por Pais'}
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
               handleSort={handlechangeSort}
            />
         </main>
      </div>
   );
}

export default App;
