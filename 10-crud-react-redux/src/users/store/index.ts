/* eslint-disable @typescript-eslint/promise-function-async */
import { type Middleware, configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice';
import { toast } from 'sonner';

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
   next(action);
   localStorage.setItem('redux-state', JSON.stringify(store.getState()));
};

//* Este middleware es para realizar el fetch de datos con la DB.
//* Se usa un Mock con json-server para simular la base de datos.
const syncWithDatabase: Middleware = () => (next) => (action) => {
   const { type, payload } = action;
   next(action);
   if (type === 'users/addNewUser') {
      fetch('http://localhost:8080/users', {
         method: 'POST',
         body: JSON.stringify(payload),
         headers: {
            'content-type': 'application/json'
         }
      }).then(res => {
         if (res.ok) {
            toast.success('Usuario Guardado Correctamente!');
         }
      }).catch(error => {
         console.log(error);
      });
   }
};

export const store = configureStore({
   reducer: {
      users: usersReducer
   },
   middleware: [persistanceLocalStorageMiddleware, syncWithDatabase]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
