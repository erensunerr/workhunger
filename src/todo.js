import React, {useState} from 'react';

export default function Todo ({isDone, setDone, text}) {
  return (
    <div class="border-solid border-2 border-gray-800 my-2 py-2 px-4 flex items-center">
      <input type="checkbox" checked={isDone} onChange={
        () => setDone()
      }/>
      <p class={`ml-2 ${isDone && 'line-through'}`}>{text}</p>
    </div>
  )
}
