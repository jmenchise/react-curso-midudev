import React from 'react';
import './app.css';
import useCatFact from './hooks/useCatFact';
import useCatImage from './hooks/useCatImage';


export default function App() {
   const { fact, getRandomFact } = useCatFact();
   const { imgUrl } = useCatImage({ fact });
   const handleClick = () => {
      getRandomFact();
   }

   return (
      <main>
         <h1>App de gatitos</h1>
         <button onClick={handleClick}>
            Get new Fact!
         </button>
         {fact && (imgUrl ?
            <>
               <p>{fact}</p>
               <div>
                  <img src={imgUrl} alt={`Random image extracted from "https://cataas.com" API`} />
               </div>
            </>
            : <h3>Cargando la imagen</h3>
         )}
      </main>
   );
}

