import { Box, Grid, Typography, Button } from "@mui/material"

import { useState } from "react"
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import Course from "./Course";
import { nanoid } from "nanoid"
const Form = ({commonStyles}) => {


    const [currentGPA, setGPA] = useState(0)
    const [scores, setScores] = useState([{
        id: nanoid(),
        Credit: "",
        Grade: 5
    }])

    const handleSubmit = (e) => {
        e.preventDefault()
        setGPA(calculateGPA())

    }

    const handleNewCourse = () => {
        // Add new Course
        setScores((prevScores) => {
            let newArr = []
            const newScore = {
                id: nanoid(),
                Credit: "",
                Grade: ""
            }

            for (let x = 0; x < prevScores.length; x++) {
                newArr.push(prevScores[x])
            }
            newArr.push(newScore)
            return newArr
        })


    }


    const calculateGPA = () => {
        console.log(scores)
        var totalAU = scores.reduce((accum, score) => { return accum + Number(score.Credit) }, 0)
        var totalGradePoint = scores.reduce((accum, score) => {
            return accum + (score.Credit * score.Grade)
        }, 0)
        var gpa = Math.round(totalGradePoint/totalAU * 100) / 100;
        return gpa;
        
    }

    return (
        <Box sx={{...commonStyles, marginTop: 2.5}}>
            

            {scores.map((Score) => {
                return <Course key={Score.id} score={Score} setScores={setScores} />
            })}

            <Grid container direction="row" sx={{ marginTop: 2 }}  >
            <Button sx={{ marginRight: 2 }} onClick={handleNewCourse} variant="contained" endIcon={<AddIcon />}>Add Course</Button>
                <Button onClick={handleSubmit} sx={{ marginRight: 2 }} variant="contained" size="medium">
                    Calculate GPA
                </Button>
                <Typography variant="h6" sx={{ marginRight: 2, fontSize: '1.5rem' }} > GPA: {currentGPA}</Typography>
            </Grid>
        </Box>
    )
}

export default Form