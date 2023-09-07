import { useMemo, useState } from 'react';
import './App.css';
import { SortBy } from './types.d';
import { UsersList } from './components/UsersList';
import { useUsers } from './hooks/useUsers';

function App() {
   const { isLoading, isError, users, fetchNextPage, hasNextPage, refetch } = useUsers();
   const [showRows, setShowRows] = useState(false);
   const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
   const [filterCountry, setFilterCountry] = useState<string | null>();
   // const originalUsers = useRef<User[]>([]);

   const toggleShowRows = () => setShowRows(!showRows);

   const handleDelete = (email: string) => {
      // TODO: falta el borrado de un usuario
   };

   const handleReset = async () => {
      // TODO: Falta el reseteo del estado inicial.
      await refetch();
   };

   const handlechangeSort = (sort: SortBy) => {
      const newSortingValue = sorting === SortBy.NONE ? sort : SortBy.NONE;
      setSorting(newSortingValue);
   };

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
            <button onClick={() => { void handleReset; }}>Reestablecer estado</button>
            <input
               onChange={(e) => { setFilterCountry(e.target.value); }}
               type="text"
               placeholder='Filtra por país'
            />
         </header>
         <main>
            {users.length > 0 &&
               <>
                  <UsersList
                     showRows={showRows}
                     users={sortedUsers}
                     handleDelete={handleDelete}
                     handleSort={handlechangeSort}
                  />
                  {(hasNextPage === true)
                     ? < button onClick={() => { void fetchNextPage(); }}>Cargar más resultados</button>
                     : <p>No hay más resultados.</p>
                  }
               </>
            }
            {isLoading && <p>Cargando...</p>}
            {isError && <p>Ha habido un error!</p>}
            {!isLoading && !isError && users.length === 0 && <p>No hay usuarios.</p>}
         </main>
      </div >
   );
}

export default App;
