import { type Middleware, configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice';
// import { toast } from 'sonner';

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
   next(action);
   localStorage.setItem('redux-state', JSON.stringify(store.getState()));
};

// const syncWithDatabase: Middleware = () => (next) => (action) => {
//    const { type, payload } = action;
//    console.log('action:', action);
//    next(action);
//    // const user = JSON.stringify(payload);
//    // console.log('user:', user);
//    console.log('payload:', payload);
//    if (type === 'users/addNewUser') {
//       fetch('http://127.0.0.1:8080', {
//          method: 'POST',
//          body: payload,
//          headers: {
//             'content-type': 'application/json'
//          }
//       }).then(res => {
//          if (res.ok) {
//             toast.success('Usuario Guardado Correctamente!');
//          }
//       }).catch(error => {
//          console.log(error);
//       });
//    }
// };

export const store = configureStore({
   reducer: {
      users: usersReducer
   },
   middleware: [persistanceLocalStorageMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
