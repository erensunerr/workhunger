
import {useEffect, useState} from 'react';
import {getAuth} from 'firebase/auth';
import {app} from './firebase_init';



export default function useAuthStateChanged() {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  useEffect(
    () => {
      const auth = getAuth(app);
      auth.onAuthStateChanged((user) => {
        setUser(user);
      })
  }, [])
  return user
}
