import { Box, Grid, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <>
            <Box bgcolor="info.main" sx={{padding: 2}} >
                <Grid container spacing={2}
                    justifyContent="center" textAlign="center">
                    <Grid item xs={3}>
                        <Typography color="white" variant="subtitle1">Developed by Bryan</Typography>
                        <LinkedInIcon sx={{padding: 1}}fontSize="large"/>
                        <InstagramIcon sx={{padding: 1}} fontSize="large"/>
                        <GitHubIcon sx={{padding: 1}} fontSize="large"/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer