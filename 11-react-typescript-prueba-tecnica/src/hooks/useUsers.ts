import { useInfiniteQuery } from '@tanstack/react-query';
import { getUsers } from '../services/users';
import { type User } from '../types';

export const useUsers = () => {
   const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ users: User[], nextPage?: number }>(
      ['users'],
      getUsers,
      {
         getNextPageParam: (lastPage) => lastPage.nextPage,
         refetchOnWindowFocus: false,
         staleTime: 1000 * 60 * 5
      }
   );

   return {
      isError,
      isLoading,
      users: data?.pages.flatMap(page => page.users) ?? [],
      fetchNextPage,
      refetch,
      hasNextPage
   };
};
