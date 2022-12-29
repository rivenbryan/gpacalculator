import { app } from './firebase-config';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import MainPage from "./components/MainPage";
import StandardForm from "./components/forms/StandardForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './contexts/userContext'

const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setuserName] = useState('')
  const authentication = getAuth(app);

  let navigate = useNavigate();

  const handleAction = (id) => {


    if (id === 2) {
      // Returns a promise
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          // If success then navigate to /
          navigate('/')
          // Creates a Token like Cookie which can be used 
          localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {

          if (email === "" && password === "") {
            toast.error('Empty string!');
          }

          if (error.code === 'auth/weak-password') {
            toast.error('Password should be at least 6 characters')
          }

          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email has already been used. Try another email')
          }
        })
    }

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {

          if (email === "" && password === "") {
            toast.error('Empty string!');
          }

          if (error.code === 'auth/invalid-email') {
            toast.error('Invalid Email')
          }

          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }
  }

  // Re-renders when user is authenticated
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      setuserName(user.email)
    }
  });

  return (
    <>
      <ToastContainer position="bottom-center" />
      <UserContext.Provider value={{ userName, setuserName }}>
        <Routes>
          <Route path='/login' element={<StandardForm handleAction={() => handleAction(1)} setEmail={setEmail} setPassword={setPassword} title="Login" />} />
          <Route path='/register' element={<StandardForm handleAction={() => handleAction(2)} setEmail={setEmail} setPassword={setPassword} title="Register" />} />
          <Route path='/' element={<MainPage />} />

        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App;
