import { Toaster } from 'sonner';
import './App.css';
import { CreateNewUser } from './users/components/CreateNewUser';
import { UserList } from './users/components/UsersList';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
   return (
      <>
         <UserList />
         <CreateNewUser />
         <Toaster richColors />
      </>
   );
}

export default App;
