import React, { useEffect, useState } from 'react'
import './app.css'

export default function App() {
   const [fact, setFact] = useState('');
   const [imgUrl, setImgUrl] = useState('');

   useEffect(() => {
      fetch('https://catfact.ninja/fact')
         .then(res => {
            if (!res.ok) {
               throw new Error('Error al conectar con el servidor.');
            }
            return res.json()
         })
         .then(data => setFact(data.fact))
         .catch(err => console.log(err))
   }, []);

   useEffect(() => {
      if (!fact) {
         return
      }
      const firstWord = fact.split(' ')[0];
      fetch(`https://cataas.com/cat/says/${firstWord}`)
         .then(res => setImgUrl(res.url));
   }, [fact])


   return (
      <main>
         <h1>App de gatitos</h1>
         {fact && <p>{fact}</p>}
         {imgUrl ?
            <div>
               <img src={imgUrl} alt={`Random image extracted from "https://cataas.com" API`} />
            </div>
            : <h3>Cargando imagen</h3>
         }
      </main>
   );
}

