import { React, useEffect } from 'react'
import { Box, TextField, Button, Typography, Grid, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
export default function Loginform({ title, setPassword, setEmail, handleAction }) {

    const formStyles = {
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '.28571429rem',
        textAlign: 'center',
        justifyContent: 'center',
        width: '35%',
        margin: 'auto',
        padding: 2,
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    let navigate = useNavigate();
    // Check if user is logged in 
    useEffect(() => {
        let authToken = localStorage.getItem('Auth Token')

        // If Token exists, it will redirect user to homepage
        if (authToken) {
            navigate('/')
        }
    }, [navigate])

    return (
        <>

            <Box sx={{ margin: -1 }}>
                <Navbar />
                <Box sx={formStyles} component="form">

                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">{title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="email" onChange={(e) => setEmail(e.target.value)} label="Enter the Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="password" type="password" onChange={(e) => setPassword(e.target.value)} label="Enter the Password" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleAction} variant="contained" fullWidth required >{title}</Button>
                        </Grid>
                        {title === 'Login' ?
                            <>
                                <Grid item xs={6}>
                                    <Link color="inherit" variant="subtitle1" underline="hover" href="/register">Don't have an account?</Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link color="inherit" variant='subtitle1' underline="hover">Forget password?</Link>
                                </Grid>
                            </> : <></>}

                    </Grid>
                </Box >

            </Box>
        </>
    )
}
