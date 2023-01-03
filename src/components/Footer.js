import { Box, Grid, Tooltip, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <>
            <Box bgcolor="info.main" sx={{ padding: 2 }} >
                <Grid container spacing={2}
                    justifyContent="center" textAlign="center">
                    <Grid item xs={3}>
                        <Typography color="white" variant="subtitle1">Developed by Bryan</Typography>
                        <Tooltip title="Linkedln">
                            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/bryan-tay-507971152/')} sx={{ padding: 1 }} fontSize="large" />
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <InstagramIcon onClick={() => window.open('https://www.instagram.com/bryanhello/?hl=en')} sx={{ padding: 1 }} fontSize="large" />
                        </Tooltip>
                        <Tooltip title="Github">
                            <GitHubIcon onClick={() => window.open('https://github.com/rivenbryan')} sx={{ padding: 1 }} fontSize="large" />
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer