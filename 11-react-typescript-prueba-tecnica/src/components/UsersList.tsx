/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type User } from '../types';

interface Props {
   users: User[]
   showRows: boolean
}

export const UsersList = ({ users, showRows }: Props) => {
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
                  <tr key={user.id.value}>
                     <td>
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
                        <button>Eliminar</button>
                     </td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   );
};
