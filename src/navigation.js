import React, {useState} from 'react';
import {MenuIcon} from '@heroicons/react/solid';

export default function Navigation({links}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="flex relative bg-gray-800 py-4 px-6 justify-end">
      <MenuIcon className="w-10 h-10 fill-gray-100" onClick={() => setIsExpanded((p) => !p)}/>
      <div className="w-screen h-auto bg-gray-800 absolute top-full left-0">
         { // if expanded on mobile display the links
           isExpanded &&
           <div className="w-10/12 mx-auto flex flex-col my-4">
            {
              links.map(
               (link) => <a href={link.link} className="text-xl text-gray-100 py-1.5">- {link.text}</a>
             )
           }
             </div>

         }


      </div>
    </nav>
  )
}
