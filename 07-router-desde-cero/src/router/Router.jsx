import { match } from 'path-to-regexp';
import React, { Children, useEffect, useState } from 'react'

const Router = ({ routes = [], children, defaultComponent: DefaultComponent }) => {
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

   let routeParams = {};

   
   const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type;
      const isRoute = name === 'Route';
      return isRoute ? props : null;
   });
   
   const routesToUse = routes.concat(routesFromChildren); 
   // hacemos este .concat para juntar el array de las rutas que vienen por children ('/' y '/about') con
   // las rutas que pasamos x props, ('/search/:query'). 
   // lo mejor sería meter el path de /search/:query como un componente Route y utilizar directamente las
   // routes que vienen x children.

   const Page = routesToUse.find(({ path }) => {
      if (path === currentPath) {
         return true;
      }
      const matcherUrl = match(path, { decode: decodeURIComponent });
      const matched = matcherUrl(currentPath);
      if (!matched) {
         return false;
      };
      routeParams = matched.params;
      return true;
   })?.Component;

   return Page ?
      <Page routeParams={routeParams} />
      : <DefaultComponent routeParams={routeParams} />;
}

export default Router