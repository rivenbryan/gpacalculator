import { Box, Grid, Typography, Button } from "@mui/material"
import { useState, useContext } from "react"
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';
import Course from "./Course";
import ConfirmMessageDialog from "./ConfirmMessageDialog";
import { nanoid } from "nanoid"
import commonStyles from '../style'
import { UserContext } from "../../contexts/userContext";
import { setDoc, collection, doc, addDoc } from 'firebase/firestore'
import { db } from "../../firebase-config";

const Form = () => {

    // useContext is used when you want to access state from grandgrandparents to children
    const { userName, userID } = useContext(UserContext)
    const [currentSemester, setSemester] = useState('')
    const [currentGPA, setGPA] = useState(0)
    const [scores, setScores] = useState([{
        id: nanoid(),
        Course: "",
        Credit: 0,
        Grade: 5
    }])
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setGPA(calculateGPA())
    }

    const handleSave = () => {
        setOpen(false);

        // If Statement to make sure that currentSem is not empty
        if (currentSemester === "") {
            setErrorMessage("Current Semester cannot be empty!")
            setOpen(true);
            return;
        }

        // Add document (currentSemester) with the name and value of currentSemester
        setDoc(doc(db, "users/" + userID + "/semesters/", currentSemester), {
            name: currentSemester
        })

        // Add a new container  to database based on userID
        for (let i = 0; i < scores.length; i++) {
            let score = scores[i]

            if (score.Course === "") {
                score.Course = "Default Course"
            }


            addDoc(collection(db, "users/" + userID + "/semesters/" + currentSemester, "children"), score)

            if (score.Course === "Default Course") {
                score.Course = ""
            }
        }
        console.log("Saved to Database!")



    }

    const handleClickOpen = () => {
        // Results return true if score.Credit is empty
        const result = scores.some(score => score.Credit === "")
        // If it is empty, prompt an error message 
        if (result) {
            setErrorMessage("Credit cannot be empty!")
            setOpen(false) // DialogBox is closed
        }else {
        // Reset the error message and open up the dialog box
            setErrorMessage("")
            setOpen(true);
        }
       
      
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleNewCourse = () => {
        // Add new Course
        setScores((prevScores) => {
            let newArr = []
            const newScore = {
                id: nanoid(),
                Course: "",
                Credit: 0,
                Grade: 5,
            }

            for (let x = 0; x < prevScores.length; x++) {
                newArr.push(prevScores[x])
            }
            newArr.push(newScore)
            return newArr
        })


    }


    const calculateGPA = () => {
        var totalAU = scores.reduce((accum, score) => { return accum + Number(score.Credit) }, 0)
        var totalGradePoint = scores.reduce((accum, score) => {
            return accum + (score.Credit * score.Grade)
        }, 0)
        var gpa = Math.round(totalGradePoint / totalAU * 100) / 100;
        return gpa;
    }

    return (
        <>
            <Box sx={{ ...commonStyles, marginTop: 2.5 }}>

                {scores.map((Score) => {
                    return <Course key={Score.id} score={Score}  setScores={setScores} />
                })}

                <Grid container direction="row" sx={{ marginTop: 2 }}  >
                    <Button sx={{ marginRight: 2.4 }} onClick={handleNewCourse} variant="contained" size="medium" endIcon={<AddIcon />}>Add Course</Button>
                    <Button onClick={handleSubmit} sx={{ marginRight: 2.8 }} variant="contained" size="medium"> Calculate GPA </Button>
                    {userName === "" ? "" : <Button onClick={handleClickOpen} sx={{ marginRight: 2 }} variant="contained" size="small" endIcon={<SaveAltSharpIcon />}> SAVE </Button>}
                </Grid>
                <ConfirmMessageDialog setSemester={setSemester} errorMessage={errorMessage} handleClose={handleClose} handleSave={handleSave} open={open} />
                <Typography variant="h6" sx={{ marginTop: 3, fontSize: '1.5rem' }} > GPA: {currentGPA}</Typography>
                {errorMessage === "" ? "" : <Typography sx={{marginTop: 1}}color="red">  Error: {errorMessage}</Typography> }
            </Box>

        </>
    )
}

export default Form