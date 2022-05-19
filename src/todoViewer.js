import React, {useState} from 'react';
import Todo from './todo'
import { v4 as uuidv4 } from 'uuid';


const emptyTodo = {text: '', isDone: false};


export default function TodoViewer(props) {
  const {todos, setTodos} = props;
  const [currentTodo, setCurrentTodo] = useState(emptyTodo);

  return (
    <section className="w-10/12 lg:w-6/12 xl:w-4/12 mx-auto py-24 px-3 my-6">
      <h2 className="text-6xl font-bold mb-16 text-gray-800">Goals</h2>

      {
        todos.map(
          (todo, i) => <Todo setTodos={setTodos} task={todo} key={todo.id} setScheduled={props.setScheduled} isScheduled={
            // one task can only be scheduled for one period for now
            props.scheduled.filter(
              (s) => s.task.id == todo.id
            ).length > 0
          }/>
        )
      }

      <div className="my-2 py-2 px-2 flex items-center justify-between">
        <input type="text" className="color-gray-500 focus:outline-0 text-xl" placeholder="I'll do x" value={currentTodo.text} onChange={
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
                (todos) => [...todos, {...currentTodo, id: uuidv4()},]
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
