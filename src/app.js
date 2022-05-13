import React, {useState} from 'react';
import Todo from './todo'
const TODOS = [
  {
    text: 'read a book',
    isDone: true
  },
  {
    text: 'write a book',
    isDone: false,
  }
]

const emptyTodo = {text: '', isDone: false};
export default function App() {
  const [todos, setTodos] = useState(TODOS);
  const [currentTodo, setCurrentTodo] = useState(emptyTodo);

  return (
    <section class="w-10/12 border-solid border-2 border-gray-800 mx-auto py-24 px-3 my-6">
      <h2 class="text-6xl font-bold mb-16">Tasks List</h2>

      {
        todos.map(
          (todo, i) => <Todo setDone={
            () => setTodos(
              (todos) => todos.map(
                (todo, j) => j == i ? {...todo, isDone: !todo.isDone} : todo
              )
            )
        } {...todo} />
        )
      }

      {
      // <div class="border-solid border-2 border-gray-800 my-2 py-2 px-4 flex items-center">
      //   <input type="checkbox" class="" checked />
      //   <p class="ml-2 line-through">read a book</p>
      // </div>
      //
      //
      // <div class="border-solid border-2 border-gray-800 my-2 py-2 px-4 flex items-center justify-between">
      //   <div class="flex items-center">
      //     <input type="checkbox" class="" />
      //     <p class="ml-2">write a book</p>
      //   </div>
      // </div>
      //
      // <div class="border-solid border-2 border-gray-800 my-2 py-2 px-4 flex items-center ml-4">
      //   <input type="checkbox" class=""/>
      //   <p class="ml-2">write a sentence</p>
      // </div>
    }

      <div class="border-solid border-2 border-gray-800 my-2 py-2 px-4 flex items-center justify-between">
        <input type="text" class="color-gray-500 focus:outline-0" placeholder="I'll do x" value={currentTodo.text} onChange={
          // update the current todo with what's written in the box
          (e) => {
            setCurrentTodo(
              (todo) => ({...todo, text: e.target.value})
            );
          }
        }
        onKeyPress={
          // commit the todo when the user presses enter
          (e) => {
            if (e.key == "Enter") {
              setTodos(
                (todos) => [...todos, currentTodo]
              );
              setCurrentTodo(emptyTodo);
          }
          }
        }
         />
      </div>

    </section>
  )
}
