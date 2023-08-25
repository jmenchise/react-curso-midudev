/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type UserId, type User, deleteUserById, addNewUser } from '../store/slice';
import { useAppDispatch } from './useStore';

export const useUsers = () => {
   const dispatch = useAppDispatch();
   const removeUser = (id: UserId): void => {
      dispatch(deleteUserById(id));
   };
   const addUser = (user: User): void => {
      dispatch(addNewUser(user));
   };
   return {
      removeUser,
      addUser
   };
};
