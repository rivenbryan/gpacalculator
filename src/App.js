import { app } from './firebase-config';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import MainPage from "./components/MainPage";
import StandardForm from "./components/forms/StandardForm"
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './contexts/userContext'
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';
const App = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setuserName] = useState('')
  const [notiOpen, setnotiOpen] = useState([false, "", "success"]);
  
  const authentication = getAuth(app);
  let navigate = useNavigate();

  const handleAction = (id) => {

    if (id === 2) {
      // Returns a promise
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          // If success then navigate to home and set a success message
          setnotiOpen([true, "Successfully registered an account!", "success"])
          navigate('/')
          // Creates a Token like Cookie which can be used 
          localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {

          if (email === "" || password === "") {
            setnotiOpen([true, "Email or password cannot be blank!", "error"])
          }

          if (error.code === 'auth/weak-password') {
            setnotiOpen([true, "Password should be at least 6 characters", "error"])
           
          }

          if (error.code === 'auth/email-already-in-use') {
            setnotiOpen([true, "Email has already been used. Try another email", "error"])
          }
        })
    }

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          setnotiOpen([true, "Successfully logged in!", "success"])
          navigate('/')
          
          localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {

          if (email === "" || password === "") {
            setnotiOpen([true, "Email or password cannot be blank!", "error"])
          }

          if (error.code === 'auth/weak-password') {
            setnotiOpen([true, "Password should be at least 6 characters", "error"])
           
          }

          if (error.code === 'auth/email-already-in-use') {
            setnotiOpen([true, "Email has already been used. Try another email", "error"])
          }

          if (error.code === 'auth/user-not-found') {
            setnotiOpen([true, 'Please check the Email', "error"])
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setnotiOpen([false, "", ""]);
  };

  
  return (
    <>
      <Snackbar open={notiOpen[0]} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={notiOpen[2]} sx={{ width: '100%' }}>
          {notiOpen[1]}
        </Alert>
      </Snackbar>
      <UserContext.Provider value={{ userName, setuserName, setnotiOpen }}>
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
