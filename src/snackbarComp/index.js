import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
//import { clearSnackbar } from "../../models/Snackbar/action";

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

export default function SnackbarComp (props) {
  const classes = useStyles()

  const [severity, setSeverity] = useState()

  const dispatch = useDispatch()
  const { snackbarMessage, snackbarOpen, snackbarStatus } = useSelector(
    state => state.Doctor.snackbar
  )

  useEffect(() => {
    let status = snackbarStatus ? 'success' : 'error'
    setSeverity(status)
  }, [snackbarStatus])

  const handleClose = () => {
    // dispatch(clearSnackbar());
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
