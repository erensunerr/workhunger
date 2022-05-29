import React, {useState, useEffect, useRef} from 'react';
import Ft1 from './ft-1.jpg'
import Ft2 from './ft-2.jpg'
import Ft3 from './ft-3.jpg'

import {useNavigate} from 'react-router-dom';
import GoogleButton from 'react-google-button'

import { getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";


import FeatureSection from '../featureSection'
import LoginForm from '../loginForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from '../useUser'


const title = "text-5xl lg:text-6xl font-bold inline "





// Feedback:
// - get feedback from the reddit subreddit
// - indiehackers, entrepreneurs -> subreddit
// - indiehackers website
// -> repurposing
// -> authority





export default function Landing(){

  const formRef = useRef(null);
  var navigate = useNavigate();
  const user = useUser();


  return (
    <div className="w-full bg-[#fff]">

      {
        (user != null) &&
        <section className="bg-gray-900 text-gray-100 text-xl font-bold py-12 w-full">
          <div className="w-10/12 lg:w-8/12 mx-auto">
            <h2 className="">Hey! Thanks for signing up, I'll be in touch shortly :)</h2>
          </div>
        </section>
      }

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

      <section className="w-10/12 lg:w-8/12 mx-auto flex flex-wrap pt-24">


        <h1 className={title + "text-gray-900"}>Work without getting bored.</h1>
        <h1 className={title + "text-red-500 mt-8 text-right"}>Let's make work more rewarding than anything else.</h1>

        {
          <button className="py-4 px-6 bg-gray-900 text-gray-100 rounded-lg font-bold uppercase tracking-wide ml-auto mt-12"
            onClick={
              () =>
                {
                  formRef.current?.scrollIntoView({behavior: "smooth"})
                }
            }
          >Get Early Access</button>

        }

        <FeatureSection
          title="Plan or Import from Your Favorite Planning Tool"
          imgSrc={Ft1}
          imgAlt="Planning interface sketch"
          description={
            <>
              Make plans that break down your top-level goals into manageable 25-minute chunks.
              Import your goals from a planning tool to save time.
              <span className="font-bold">
                {' '}You won't waste any time or effort wrestling with <span className="italic">this</span> app.
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
              Time blocking utilities and a generic pomodoro timer are included to help you work.
              <span className="font-bold">
                {' '}
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
              <span className="font-bold">
                {' '} This is the secret.
              </span>
            </>
          }
        />

          <div className="w-full md:w-6/12 mx-auto flex flex-wrap mt-16" ref={formRef}>

            <LoginForm />

          </div>

      </section>
      <div className="w-full py-24 mt-16 flex flex-wrap bg-gray-900 text-gray-100">
        <div className="w-prose mx-auto text-xl">
          <p className="">Built by <a href="https://twitter.com/geren8te" className="hover:text-red-500 transition">@geren8te</a></p>
          <a href="https://twitter.com/intent/tweet?text=On%20the%20waitlist%20for%20WorkHunger%20by%20%40geren8te.%20It%27s%20a%20reward%20based%20task%20management%20system%20to%20help%20you%20work%20and%20feel%20ecstatic%20about%20it!%20Check%20it%20out%20at%20workhunger.app" className="mt-4 block hover:text-cyan-400 transition">Share this on twitter.</a>
        </div>

      </div>

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
