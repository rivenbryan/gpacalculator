import Navbar from "./mainPage/Navbar";
import Footer from "./mainPage/Footer";
import Form from "./mainPage/Body";
import Information from "./mainPage/Information"
import { Box } from "@mui/material"


export default function MainPage() {


    const commonStyles = {
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '.28571429rem',
        justifyContent: 'center',
        width: '50%',
        margin: 'auto',
        padding: 2,
        marginBottom: 5,
    }
    return (
        <Box sx={{ margin: -1 }}>
            <Navbar />
            <Form commonStyles={commonStyles} />
            <Information commonStyles={commonStyles} />
            <Footer />
        </Box>
    )
}
