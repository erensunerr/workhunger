import React, {useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import GoogleButton from 'react-google-button'

import { getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {app} from './firebase_init'
import { getAnalytics, logEvent } from "firebase/analytics";


function loginError(error, analytics) {
  // let the user now there was an error
  logEvent(analytics, 'sign_up_failure', {
    error_message: error.message,
    email: error.email,
    error_code: error.code
  })
  toast(error.message, {type: 'error'})
}


function loginSuccess(analytics) {
  logEvent(analytics, 'sign_up');
  toast('I got you! Thanks for signing up :)')
}


function createAccountWithEmail(email, pass, auth, analytics) {
  createUserWithEmailAndPassword(auth, email, pass).then(
    (userCredential) => {
      loginSuccess(analytics);

    }).catch(
      (error) => {
        loginError(error, analytics);
      }
    )
}


const provider = new GoogleAuthProvider();
function signInWithGoogle(auth, analytics) {
    signInWithPopup(auth, provider)
      .then((result) => {
        loginSuccess(analytics);
      }).catch((error) => {
        loginError(error, analytics);
  })
}


// initialize google analytics.
const analytics = getAnalytics();
const auth = getAuth(app);

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <>
    <h2 className="text-4xl font-bold text-gray-900">Sign Up</h2>
    <form action="" className="w-full flex flex-wrap">
      <input
        type="email"
        name="email"
        id="email"
        className="border-solid border-2 w-full mt-12 p-2 py-1"
        placeholder="Email goes here..."
        value={email}
        onChange={
          (e) => setEmail(e.target.value)
        }
        />
      <input
        type="password"
        name="password"
        id="userPassword"
        className="border-solid border-2 w-full mt-2 p-2 py-1"
        placeholder="Password here..."
        autoComplete="new-password"
        value={pass}
        onChange={
          (e) => setPass(e.target.value)
        }
        />

        <GoogleButton onClick={
          () => signInWithGoogle(auth, analytics)
        } className="mt-4"/>


        <input
          type="submit"
          value="Sign Up"
          className="py-4 px-6 bg-gray-900 text-gray-100 rounded-lg font-bold uppercase tracking-wide ml-auto mt-4 cursor-pointer block"
          onClick={
            (e) => {
              e.preventDefault()
              createAccountWithEmail(email, pass, auth, analytics)
            }
          }
        />
    </form>
    </>

  )
}
