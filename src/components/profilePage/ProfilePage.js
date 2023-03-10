import Navbar from '../Navbar'
import SemDetails from './SemDetails'
import Footer from '../Footer'
import { Box } from '@mui/material'
import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {

    let navigate = useNavigate();
    
    
    // Check if user is logged in 
    useEffect(() => {
        let authToken = localStorage.getItem('Auth Token')
        // If Token does not exists, it will navigate to homepage
        if (!authToken) {
            navigate('/')
        }
    }, [navigate])

    return (
        <Box sx={{ margin: -1 }}>
            <Navbar />
            <SemDetails/>
            <Footer/>
        </Box>
        
    )
}
