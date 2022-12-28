import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Information from "./components/Information";
import { Box } from "@mui/material"
const App = () => {
  const commonStyles = {
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.28571429rem',
    justifyContent: 'center',
    width: '50%',
    margin: 'auto',
    padding: 2,
    marginBottom: 5,
  };
  return (
    <Box sx={{margin: -1}}>
      <Navbar/>
      <Form commonStyles={commonStyles} />
      <Information commonStyles={commonStyles} />
      <Footer/>
    </Box>
  )
}

export default App;
