import { app, db } from './firebase-config';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, forwardRef } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import MainPage from "./components/mainPage/MainPage";
import StandardForm from "./components/formPage/StandardForm"
import ProfilePage from './components/profilePage/ProfilePage';
import { setDoc, doc } from 'firebase/firestore'
import { UserContext } from './contexts/userContext'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setuserName] = useState('')
  const [notiOpen, setnotiOpen] = useState([false, "", "success"]);
  const [userID, setUserID] = useState('')

  const authentication = getAuth(app);
  let navigate = useNavigate();

  // Handler when user clicks submit form for login and r egister
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
          
          // Creates a user in the users database and set the document name as the unique user id
          setDoc(doc(db, "users", response.user.uid), {
            email: email,
            userID: response.user.uid
          })


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
          console.log(error)

          if (error.code === 'auth/too-many-requests') {
            setnotiOpen([true, "Access to this account has been temporarily disabled due to many failed login attempts. Please reset your password or try again later.", "error"])
          }
          if (error.code === 'auth/wrong-password)') {
            setnotiOpen([true, "Wrong username or password! ", "error"])
          }

          if (email === "" || password === "") {
            setnotiOpen([true, "Email or password cannot be empty!", "warning"])
          }

          if (error.code === 'auth/weak-password') {
            setnotiOpen([true, "Password should be at least 6 characters", "warning"])

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
    // Sets the userID  and userName (email) so that other components are able to use
    if (user) {
      setuserName(user.email)
      setUserID(user.uid)
    }
  });

  // Handler for snackbar when notification is closed
  const handleSnackbarClose = (event, reason) => {
    // Reason for it to close is because of clickaway 
    if (reason === 'clickaway') {
      return;
    }
    setnotiOpen([false, "", ""]);
  };

  // Pre-defined style for alert
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <>
      <Snackbar open={notiOpen[0]} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity={notiOpen[2]} sx={{ width: '100%' }}>
          {notiOpen[0] && notiOpen[1]}
        </Alert>
      </Snackbar>
      <UserContext.Provider value={{ userName, setuserName, setnotiOpen, userID }}>
        <Routes>
          <Route path='/login' element={<StandardForm handleAction={() => handleAction(1)} setEmail={setEmail} setPassword={setPassword} title="Login" />} />
          <Route path='/register' element={<StandardForm handleAction={() => handleAction(2)} setEmail={setEmail} setPassword={setPassword} title="Register" />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App;
