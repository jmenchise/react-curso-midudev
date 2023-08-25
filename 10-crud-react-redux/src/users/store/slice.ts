import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;

export interface User {
   name: string
   email: string
   github: string
}

export interface UserWithId extends User {
   id: UserId
}

const MEM_STATE: UserWithId[] = [
   {
      id: '1',
      name: 'Yazman Rodriguez',
      email: 'yazmanito@gmail.com',
      github: 'yazmanito'
   },
   {
      id: '2',
      name: 'John Doe',
      email: 'leo@gmail.com',
      github: 'leo'
   },
   {
      id: '3',
      name: 'Haakon Dahlberg',
      email: 'haakon@gmail.com',
      github: 'haakon'
   }
];

const initialState: UserWithId[] = (() => {
   const persistedState = localStorage.getItem('redux-state');
   return persistedState != null ? JSON.parse(persistedState).users : MEM_STATE;
})();

// const initialState: UserWithId[] = (() => {
//    const persistedState = localStorage.getItem('redux-state');
//    if (persistedState) {
//       return JSON.parse(persistedState).users;
//    }
//    return MEM_STATE;
// })();

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      addNewUser: (state, action: PayloadAction<User>) => {
         const id = crypto.randomUUID();
         return [...state, { id, ...action.payload }];
      },
      deleteUserById: (state, action: PayloadAction<UserId>) => {
         const id = action.payload;
         return state.filter(user => user.id !== id);
      }
   }
});

export const { addNewUser, deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
