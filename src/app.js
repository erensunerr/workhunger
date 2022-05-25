import React, {useState} from 'react';

import SetGoals from './pages/setGoals';
import TimeBlocking from './pages/timeBlocking';
import Landing from './pages/landing'

import Login from './login'
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
  }
]


// shell
export default function App() {

  return (
    <>
{
      // <Navigation links={links} elems={[
      //   <Login
      //     className="text-xl py-1.5 px-3 rounded bg-gray-200 text-gray-800 w-min"
      //   />,
      // ]}/>

    }
    <Routes>
{
      //   <Route path="/goals" element={
      //   <SetGoals
      //     todos={todos}
      //     setTodos={setTodos}
      //     setScheduled={setScheduled}
      //     scheduled={scheduled}
      //     />
      // } />
    }
      <Route path="/" element={
        <Landing />
      } />

      {
      //   <Route path="/timeblocking" element={
      //   <TimeBlocking
      //     scheduled={scheduled}
      //     />
      // } />
    }
    </Routes>
    </>
  )
}
