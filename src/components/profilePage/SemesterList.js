import React from 'react'
import { db } from '../../firebase-config'
import { collection } from 'firebase/firestore'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
export default function SemesterList({ path }) {
  const colRef = collection(db, path)
  const [courses] = useCollectionData(colRef)

  return (
    <>
      <TableContainer>
        <Table sx={{ width: 400, margin: "auto" }} size="medium" >
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align="right">Credit</TableCell>
              <TableCell align="right">Grade</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {courses?.map((course) => (
              <TableRow key={Math.random()}>
                <TableCell component="th" scope="row">{course.Course}</TableCell>
                <TableCell align="right">{course.Grade}</TableCell>
                <TableCell align="right">{course.Credit}</TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}
