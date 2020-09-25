import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  button: {
    borderRadius: '10px',
    padding: '10px',
    background: '#26a0c9',
    minWidth: 'auto',
    '&:hover': {
      background: '#3ba7cb'
    }
  }
}))

export default function ButtonComp(props) {
  const classes = useStyles(props)
  return (
    <Button
      className={`${props.styleSet ? props.styleSet : ''} ${classes.button} `}
      onClick={props.onClick}
      disabled={props.isDisable ? props.isDisable : false}
      variant='contained'
      color='primary'
    >
      {props.label}
    </Button>
  )
  // <div className={classes.root}>
  // </div>
}
