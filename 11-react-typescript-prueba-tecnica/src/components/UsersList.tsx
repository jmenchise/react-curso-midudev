import { SortBy, type User } from '../types.d';
interface Props {
   users: User[]
   showRows: boolean
   handleDelete: (email: string) => void
   handleSort: (sort: SortBy) => void
}

export const UsersList = ({ users, showRows, handleDelete, handleSort }: Props) => {
   return (
      <table style={{ width: '100%' }}>
         <thead>
            <tr>
               <th>Foto</th>
               <th className='pointer' onClick={() => { handleSort(SortBy.NAME); }}>Nombre</th>
               <th className='pointer' onClick={() => { handleSort(SortBy.LAST); }}>Apellido</th>
               <th className='pointer' onClick={() => { handleSort(SortBy.COUNTRY); }}>País</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody className={showRows ? 'show-rows' : ''}>
            {
               users.map(user => (
                  <tr key={user.email}>
                     <td style={{ padding: '.3em' }}>
                        <img src={user.picture.thumbnail} alt="User Image" />
                     </td>
                     <td>
                        {user.name.first}
                     </td>
                     <td>
                        {user.name.last}
                     </td>
                     <td>
                        {user.location.country}
                     </td>
                     <td>
                        <button onClick={() => { handleDelete(user.email); }}>Eliminar</button>
                     </td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   );
};
