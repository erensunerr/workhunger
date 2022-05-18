import React, {useState,} from 'react';
import {TrashIcon, PencilIcon, CheckIcon, ClockIcon} from "@heroicons/react/solid";

function schedule(setScheduled, task) {
  // TODO: code this
  var di=0, i=1;
  while (di == 0) {
    i++;
    
  }


  setScheduled(
    (p) => [...p, {
      period: period,
      task: task
    }]
  )
}

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className=" flex items-center justify-between w-full max-w-80">
      <div className="flex items-center grow shrink min-w-0">

        { // TODO: make this so that it stops editing when you click outside
          // this is the text section of the todo
          (isEditing) ?
          (<input
            className={`ml-2 block min-w-0 text-gray-800 text-xl outline-none`}
            autoFocus
            value={props.task.text}
            onChange={
              (e) => props.setTodos(
                (todos) => todos.map(
                  (item) => item.id == props.task.id ? {
                    ...item, text: e.target.value
                  } : item
                )
              )
            }
            />)
          :
          (
            <p
              className={`ml-2 block min-w-0 text-gray-800 text-xl ${props.task.isDone ? 'line-through' : ''}`}
              onClick={
                () => !props.task.isDone && setIsEditing(true)
              }
            >
              {props.task.text}
            </p>
          )
        }
      </div>
      {
        // icons on the right
      }
      <div className="flex items-center ml-2 ">
      {
        !props.task.isDone && (
          isEditing ?
          <CheckIcon className="h-5 w-5 text-gray-800 cursor-pointer" onClick={
            () => {
              setIsEditing(false)
            }
          } />
          :
          <PencilIcon className="h-5 w-5 text-gray-800 cursor-pointer" onClick={
            () => {
              setIsEditing(true);
            }
          }/>
        )

      }

        <TrashIcon className="h-5 w-5 text-gray-800 cursor-pointer" onClick={
          () => props.setTodos((todos) => todos.filter(
            (item) => !(item.id == props.task.id)
          ))
        }/>

        <ClockIcon className="h-5 w-5 text-gray-800 hover:gray-600 cursor-pointer" onClick={
            () => schedule(props.setScheduled, props.task)
        }/>


      </div>
    </div>
  )
}
