import { Button, Card, TextInput, Title, Badge } from '@tremor/react';
import { useUsers } from '../hooks/useUsers';
import { type User } from '../store/slice';
import { useState } from 'react';

export function CreateNewUser(): JSX.Element {
   const { addUser } = useUsers();
   const [result, setResult] = useState<'ok' | 'ko' | null>(null);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      setResult(null);

      const form = event.target;
      const formData = new FormData(form as HTMLFormElement);
      const user: User = {
         name: formData.get('name') as string,
         email: formData.get('email') as string,
         github: formData.get('github') as string
      };

      if ((user.email === '') || (user.github === '') || (user.name === '')) {
         setResult('ko');
         return;
      }

      addUser(user);
      setResult('ok');
      form.reset();
   };

   return (
      <Card style={{ marginTop: '16px' }}>
         <Title> Create New User</Title>
         <form
            autoComplete='off'
            className=''
            onSubmit={handleSubmit}

         >
            <TextInput
               placeholder='Aqui el Nombre'
               name='name'
            />
            <TextInput
               placeholder='Aqui el Email'
               name='email'
            />
            <TextInput
               placeholder='Aqui el usuario de GitHub'
               name='github'
            />
            <div>
               <Button
                  type='submit'
                  style={{ marginTop: '16px' }}
               >
                  Crear Usuario
               </Button>
               <span>
                  {result === 'ok' && <Badge style={{ marginLeft: '8px' }} color='green'>Guardado Correctamente</Badge>}
                  {result === 'ko' && <Badge style={{ marginLeft: '8px' }} color='red'>Error con los campos</Badge>}
               </span>
            </div>
         </form>
      </Card>
   );
}
