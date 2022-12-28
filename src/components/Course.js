import { Grid, TextField, Tooltip } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Course = ({ score, setScores }) => {

    const handleChange = (e) => {
        let { name, value } = e.target

        setScores((prevScores) => {
            // Initalise a new scoresArr
            let scoresArr = []
            // Loop through all of the scores
            for (let x = 0; x < prevScores.length; x++) {
                const singleScore = prevScores[x]
                // If both are equal -> correct row
                if (singleScore.id === score.id) {  // Find your score using ID
                    // Update your score values
                    const newScore = {
                        ...prevScores[x],
                        [name]: value
                    }
                    scoresArr.push(newScore)
                } else {
                    scoresArr.push(singleScore)
                }
            }
            return scoresArr

        })

    }

    const handleDeleteCourse = (e) => {
        setScores((prevScores) => {
            let scoresArr = []
            for (let i = 0; i < prevScores.length; i++) {
                const currentScore = prevScores[i]
                if (currentScore.id === score.id) {
                    continue;
                }
                scoresArr.push(currentScore)
            }
            return scoresArr

        })
    }

    return (
        <Grid sx={{ paddingBottom: 1 }} container spacing={2} columns={{ xs: 4 }}>
            <Grid item xs={1}>
                <TextField
                    id="outlined-basic"
                    label="Course"
                    variant="outlined" />
            </Grid>
            <Grid item xs={1} >
                <TextField onChange={handleChange} value={score.Credit}
                    type="number"
                    name="Credit"
                    label="Credit"
                    variant="outlined" />
            </Grid>
            <Grid item xs={1}  >
                <Select name="Grade" value={score.Grade} onChange={handleChange} sx={{ minWidth: 80 }} label="Grade">
                    <MenuItem value={5} >A+</MenuItem>
                    <MenuItem value={5}>A</MenuItem>
                    <MenuItem value={4.5}>A-</MenuItem>
                    <MenuItem value={4}>B+</MenuItem>
                    <MenuItem value={3.5}>B</MenuItem>
                    <MenuItem value={3}>B-</MenuItem>
                    <MenuItem value={2.5}>C+</MenuItem>
                    <MenuItem value={2}>C</MenuItem>
                    <MenuItem value={1.5}>C-</MenuItem>
                </Select>
                <Tooltip title="Delete">
                    <IconButton onClick={handleDeleteCourse} aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default Course