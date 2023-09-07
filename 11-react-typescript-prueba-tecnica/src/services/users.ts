export const getUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
   return await fetch(`https://randomuser.me/api/?results=10&seed=5c7fdfb137dca05c&page=${pageParam}`)
      .then(async res => {
         if (!res.ok) {
            throw new Error('Error en la petición');
         }
         return await res.json();
      })
      .then(res => {
         const currentPage = Number(res.info.page);
         const nextPage = currentPage > 10 ? undefined : currentPage + 1;
         return {
            users: res.results,
            nextPage
         };
      });
};
