import React, {useState} from 'react';
import {MenuIcon} from '@heroicons/react/solid';

export default function Navigation({links}) {
  // find some way of detecting if device is mobile
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="flex relative bg-gray-800 py-4 px-6 justify-end md:justify-center">
      <div className="h-10w-10/12 lg:w-6/12 xl:w-4/12 hidden md:flex">
        {
          links.map(
           (link) => <a href={link.link} className="text-xl text-gray-100 py-1.5 mx-1 md:hover:text-gray-300">{link.text}</a>
         )
       }
      </div>


      {
        // mobile navigation
      }
      <MenuIcon className="w-10 h-10 fill-gray-100 md:hidden" onClick={() => setIsExpanded((p) => !p)}/>
      <div className="w-screen h-auto bg-gray-800 absolute top-full left-0 md:hidden">
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
