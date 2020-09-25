import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-multiline': {
      borderRadius: '10px'
    }
  }
}))

export default function TextAreaComp({ rows }) {
  const classes = useStyles()
  const [value, setValue] = React.useState('Controlled')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        id='outlined-multiline-static'
        multiline
        rows={rows}
        defaultValue=''
        fullWidth
        variant='outlined'
        onChange={handleChange}
      />
    </form>
  )
}
