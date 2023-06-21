import React, { useState } from 'react';
import { addAt } from '../helpers';

const TwitterFollowCard = ({ userName, name, initialFollowing }) => {
   const [isFollowing, setIsFollowing] = useState(initialFollowing);
   const handleClick = () => setIsFollowing(!isFollowing);

   return (
      <article className='tw-followCard'>
         <header className='tw-followCard-header'>
            <img
               className='tw-followCard-avatar'
               alt="Avatar de mimdudev"
               src={`https://unavatar.io/${userName}`}
            />
            <div className='tw-followCard-info'>
               <strong>{name}</strong>
               <span className='tw-followCard-infoUserName'>
                  {addAt(userName)}
               </span>
            </div>
         </header>

         <aside>
            <button
               className={isFollowing ?
                  'tw-followCard-button is-following'
                  : 'tw-followCard-button'
               }
               onClick={() => { handleClick() }}
            >
               <span className='tw-followCard-text'> {isFollowing ? 'Siguiendo' : 'Seguir'} </span>
               <span className='tw-followCard-stopFollow'> Dejar de Seguir </span>
            </button>
         </aside>
      </article>
   );
}

export default TwitterFollowCard