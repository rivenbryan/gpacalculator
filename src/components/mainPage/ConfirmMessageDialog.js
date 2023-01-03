import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmMessageDialog({handleClose, open, handleSave, setSemester, errorMessage}) {
    console.log(errorMessage)
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save GPA</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To save your current grades, please input your Semester. Eg: SEM1
          </DialogContentText>

          <TextField 
            autoFocus
            margin="dense"
            error={errorMessage === "" ? false : true} 
            variant="standard" 
            helperText={errorMessage} 
            onChange={(e) => { setSemester(e.target.value) 
            }} 
            /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
  )
}
