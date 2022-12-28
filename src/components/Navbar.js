import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar >
            <CalculateIcon fontSize='medium' sx={{marginRight: 1}}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GPA Calculator
            </Typography>
           
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar