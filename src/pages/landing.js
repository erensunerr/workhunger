import React, {useState} from 'react';
import Ft1 from './ft-1.jpg'
import Ft2 from './ft-2.jpg'
import Ft3 from './ft-3.jpg'

import {useNavigate} from 'react-router-dom';

import { getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase_init'
import FeatureSection from '../featureSection'


const title = "text-6xl lg:text-8xl font-bold inline "
const provider = new GoogleAuthProvider();



export default function Landing(){
  const [email, setEmail] = useState('');
  var navigate = useNavigate();

  // Initialize the FirebaseUI Widget using Firebase.
  const auth = getAuth(app);
  const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


  return (
    <div className="w-full bg-[#fff]">
      <section className="w-10/12 lg:w-8/12 mx-auto flex flex-wrap py-24">

        <h1 className={title + "text-gray-900"}>Work for longer without getting bored.</h1>
        <h1 className={title + "text-red-500 mt-8 text-right"}>Let's make work more rewarding than anything else.</h1>

        {
          <button className="py-4 px-6 bg-gray-900 text-gray-100 rounded-lg font-bold uppercase tracking-wide ml-auto mt-12"
            onClick={
              () => signInWithGoogle()
            }
          >Sign Up</button>

        }

        <FeatureSection
          title="Plan or Connect to Your Favorite Tool"
          imgSrc={Ft1}
          imgAlt="Planning interface sketch"
          description={
            <>
              Make plans that break down your goals into manageable 25-minute chunks
              or import goals from your favorite platform.
              <span className="font-bold">
                {' '}After all, planning is a tool, not a burden.
              </span>
            </>
          }
        />

        <FeatureSection
          title="Do the Work"
          imgSrc={Ft2}
          imgAlt="Pomodoro timer interface sketch"
          description={
            <>
              A generic pomodoro timer is included to help you work.
              <span className="font-bold">
                {' '} This is like luring a dog into sitting.
              </span>
            </>
          }
        />

        <FeatureSection
          title="Get Your Reward"
          imgSrc={Ft3}
          imgAlt="Rewarding interface sketch"
          description={
            <>
              Prepare your reward ahead of time or pick from a variety of options.
              The dog won't sit again if you don't reward it,
              <span className="font-bold">
                {' '}yet other people expect to work without a reward.
              </span>
            </>
          }
        />


          <button className="py-4 px-6 bg-gray-900 text-gray-100 rounded-lg font-bold uppercase tracking-wide ml-auto mt-8"
            onClick={
              () => signInWithGoogle()
            }
          >Sign Up</button>


      </section>
    </div>

  )
}


//
// <div className={featureSection}>
//   <h2>Do</h2>
// </div>
// <div className={featureSection}>
//   <h2>Reward</h2>
// </div>
