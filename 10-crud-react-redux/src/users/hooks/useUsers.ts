/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type UserId, deleteUserById } from '../store/slice';
import { useAppDispatch } from './useStore';

export const useUsers = () => {
   const dispatch = useAppDispatch();
   const removeUser = (id: UserId): void => {
      dispatch(deleteUserById(id));
   };

   return {
      removeUser
   };
};
