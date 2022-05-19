import React, {useState} from 'react';
import TodoViewer from './todoViewer';

import TimeBlocking from './timeBlocking';
import Navigation from './navigation'

import {
  Routes,
  Route
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './useLocalStorage'


const TODOS = [
  {
    id: "xxa10",
    text: 'read a book',
    isDone: true,
    children: [
    ]
  },
  {
    id: "101a",
    text: 'write a book',
    isDone: false,
    children: [

    ]
  }
]

const SCHEDULED = [
  {
    period: 1,
    task: TODOS[0]
  },
  {
    period: 35,
    task: TODOS[1]
  },
]


const links = [
  {
    text: "Set Goals",
    link: '/goals',
  },
  {
    text: "Time Block",
    link: '/timeblocking'
  },
]


// shell
export default function App() {
  const [scheduled, setScheduled] = useLocalStorage("scheduled", SCHEDULED);
  const [todos, setTodos] = useLocalStorage("todos", TODOS);

  console.log('scheduled:', scheduled)
  console.log('todos:', todos)

  return (
    <>
    <Navigation links={links}/>
    <Routes>
      <Route path="/goals" element={<TodoViewer todos={todos} setTodos={setTodos} setScheduled={setScheduled} scheduled={scheduled}/>} />
      <Route path="/timeblocking" element={<TimeBlocking scheduled={scheduled}/>} />
    </Routes>
    </>
  )
}
