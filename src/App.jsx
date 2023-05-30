import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './mainPage';
import { auth } from "./firebase"
import './App.css'

function App() {
  const [user] = useAuthState(auth);
  console.log("USER", user)
  return (
    user ? <Mainpage /> : <Login />
    // <div>
    //   hello
    // </div>
  );
}

export default App
