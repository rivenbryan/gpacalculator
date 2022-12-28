import { Box, Grid, Typography, CardMedia, autocompleteClasses } from "@mui/material"

const Information = ({commonStyles}) => {
 

    return (
        <Box sx={commonStyles}>
            <Typography variant="h6" sx={{paddingBottom: 1}}>How is GPA Calculated?</Typography>
            <Typography variant="subtitle1" sx={{paddingBottom: 1}}>In order to calculate GPA, we would first need the following 3 components: </Typography>
            <Typography variant="subtitle1">1: Total Credits: Total Credits earned over all the modules taken </Typography>
            <Typography variant="subtitle1">2: Module Grade: Individual grade of all the modules you have taken </Typography>
            <Typography variant="subtitle1">3: Module Credit: Individual credit of all the module you have taken </Typography>
            <CardMedia sx={{marginTop: 3}}component="img" alt="GPA Formula" src="img/gpa_formula.png"/>
        </Box>
      

    )
}

export default Information