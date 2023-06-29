import { useEffect, useState } from 'react';

const useCatFact = () => {
   const [fact, setFact] = useState('');

   useEffect(() => {
      getRandomFact();
   }, []);
   
   const getRandomFact = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
         throw new Error('Error al conectar con el servidor.');
      };
      const data = await response.json();
      setFact(data.fact);
   }


   return { fact, getRandomFact }
};

export default useCatFact;