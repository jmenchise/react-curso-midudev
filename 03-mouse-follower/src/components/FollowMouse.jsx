import { useEffect, useState } from 'react';
import React from 'react'

const FollowMouse = () => {
   const [enabled, setEnabled] = useState(false);
   const [position, setPosition] = useState({ x: 0, y: 0 });

   // un useEffect para controlar agregar el evento de pointer move y cargar
   // las coordenadas del mouse en un estado.
   useEffect(() => {
      const handleMove = e => {
         const { clientX, clientY } = e;
         setPosition({ x: clientX, y: clientY });
      }
      if (enabled) {
         window.addEventListener('pointermove', handleMove);
      }

      return () => {
         window.removeEventListener('pointermove', handleMove);
      }
   }, [enabled]);


   // otro useEffect que se encarga de agregar y quitar una clase en particular,
   // para ocultar el puntero del mouse cuando se activa el seguidor del cursor.
   useEffect(() => {
      document.querySelector('body').classList.toggle('no-cursor', enabled);
      document.querySelector('button').classList.toggle('no-cursor', enabled);
      
      return () => {
         document.querySelector('body').classList.remove('no-cursor');
         document.querySelector('button').classList.remove('no-cursor');
      }
   }, [enabled]);

   return (
      <main>
         {enabled && <div style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`
         }} />}
         <button onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
         </button>
      </main>
   );
}

export default FollowMouse;