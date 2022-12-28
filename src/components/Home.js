import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase-config';
export default function Home() {
  let navigate = useNavigate();

  const handleLogOut = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {

      localStorage.removeItem("Auth Token")
      console.log("Sign out successfully")
      navigate('/')
    }).catch((error) => {
    });
  }

  useEffect(() => {
    let authToken = localStorage.getItem('Auth Token')

    // If Token exists, it will remain on this page
    if (authToken) {
      navigate('/home')
    }

    // If it does not exists, redirect it to login
    if (!authToken) {
      navigate('/login')
    }

  }, [])


  return (
    <>
      <div>Home</div>
      <button onClick={handleLogOut}>Sign out</button>
    </>

  )
}
