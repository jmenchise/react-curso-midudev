import React, { useEffect, useState } from 'react'

const Router = ({ routes = [], defaultComponent: DefaultComponent = () => null }) => {
   const [currentPath, setCurrentPath] = useState(window.location.pathname);

   useEffect(() => {
      const onLocationChange = () => {
         setCurrentPath(window.location.pathname);
      };
      window.addEventListener('navigate', onLocationChange);
      window.addEventListener('popstate', onLocationChange);

      return () => {
         window.removeEventListener('navigate', onLocationChange);
         window.removeEventListener('popstate', onLocationChange);
      };
   }, []);

   const Page = routes.find(({ path }) => path === currentPath)?.Component;

   return Page ? <Page /> : <DefaultComponent />
}

export default Router