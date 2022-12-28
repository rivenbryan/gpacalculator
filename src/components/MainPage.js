import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import Information from "./Information"
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
