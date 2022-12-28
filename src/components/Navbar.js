import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import Typography from '@mui/material/Typography';

const Navbar = () => {
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

          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default Navbar