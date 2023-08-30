import { type User } from '../types';

interface Props {
   users: User[]
   showRows: boolean
   handleDelete: (email: string) => void
}

export const UsersList = ({ users, showRows, handleDelete }: Props) => {
   return (
      <table style={{ width: '100%' }}>
         <thead>
            <tr>
               <th>Foto</th>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>País</th>
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
