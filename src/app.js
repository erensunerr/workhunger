import React, {useState} from 'react';
import TodoViewer from './todoViewer';

import TimeBlocking from './timeBlocking';
import Navigation from './navigation'

import {
  Routes,
  Route
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TODOS = [
  {
    id: uuidv4(),
    text: 'read a book',
    isDone: true,
    children: [
      {
        id: uuidv4(),
        text: 'write a book',
        isDone: false,
        children: [],
      },
      {
        id: uuidv4(),
        text: 'write a book',
        isDone: false,
        children: [],
      }
    ]
  },
  {
    id: uuidv4(),
    text: 'write a book',
    isDone: false,
    children: [

    ]
  }
]

const SCHEDULED = [
  {
    period: 1,
    task: {
      id: uuidv4(),
      text: 'write a book about paleantology',
      isDone: false,
    }
  },
  {
    period: 35,
    task: {
      id: uuidv4(),
      text: 'read a book',
      isDone: false,
    }
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
  const [scheduled, setScheduled] = useState(SCHEDULED);
  return (
    <>
    <Navigation links={links}/>
    <Routes>
      <Route path="/goals" element={<TodoViewer todos={TODOS} setScheduled={setScheduled}/>} />
      <Route path="/timeblocking" element={<TimeBlocking scheduled={scheduled}/>} />
    </Routes>
    </>
  )
}
