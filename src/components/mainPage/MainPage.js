import Navbar from "../Navbar";
import Footer from "../Footer";
import Form from "./Body";
import Information from "./Information"
import { Box } from "@mui/material"
import commonStyles from "../style";

export default function MainPage() {


    return (
        <Box sx={{ margin: -1 }}>
            <Navbar />
            <Form commonStyles={commonStyles} />
            <Information commonStyles={commonStyles} />
            <Footer />
        </Box>
    )
}
