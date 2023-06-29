import { useEffect, useState } from "react";


const useCatImage = ({ fact }) => {
   const [imgUrl, setImgUrl] = useState('');

   useEffect(() => {
      if (!fact) {
         return;
      };
      getCatImg();
   }, [fact]);

   const getCatImg = async () => {
      const firstWord = fact.split(' ')[0];
      const response = await fetch(`https://cataas.com/cat/says/${firstWord}`);
      setImgUrl(response.url);
   }

   return { imgUrl }
}

export default useCatImage