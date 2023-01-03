import React, {useContext } from 'react'
import SemesterList from './SemesterList'
import commonStyles from '../style'
import { Box, Typography } from '@mui/material'
import { db } from '../../firebase-config'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { UserContext } from "../../contexts/userContext";

export default function SemDetails() {

  let {userID } = useContext(UserContext)
  
  // To make sure that userID will not be NULL
  if(userID === ""){
    userID = "default"
  }

  const query = collection(db, "users", userID , "semesters")
  const [semesters, loading] = useCollectionData(query)
 

  return (

    <Box sx={{...commonStyles, marginTop: 3}}>
      {loading && "Loading..."}

      {semesters?.map(semester => (
        <Box sx={{marginBottom: 3}}key={Math.random()}>
          <Typography sx={{textAlign: 'center'}} gutterBottom variant="h6">{semester.name}</Typography>
          <SemesterList path={'users/' + userID + '/semesters/' + semester.name + '/children'}/>
        </Box>
      )
      )}


    </Box>
  )
}
