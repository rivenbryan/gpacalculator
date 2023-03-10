import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import Typography from '@mui/material/Typography';
import { React, useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase-config';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();

  // useContext is used when you want to access state from grandgrandparents to children
  const { userName, setuserName, setnotiOpen } = useContext(UserContext)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAction = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      // When a user clicks log out
      // 1. Remove Cookies
      // 2. Set the username back to default
      // 3. Set successfully log out message
      // 4. Redirect to main page

      localStorage.removeItem("Auth Token")
      setuserName('')
      navigate("/")
      setnotiOpen([true, "Successfully logged out!", "success"])
    }).catch((error) => {
    });

  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <CalculateIcon fontSize='medium' sx={{ marginRight: 1 }} />
          <Typography component="a" href="/" variant="h6" sx={{
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 2,
          }}>
            GPA Calculator
          </Typography>
          {userName !== '' ?
            <>
              <Typography>Welcome back, {userName}</Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem divider component="button" href="/profile">Profile</MenuItem>
                <MenuItem onClick={handleAction}>Sign out</MenuItem>

              </Menu>


            </>
            : <Button color="inherit" href="/login">Login</Button>}

        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default Navbar