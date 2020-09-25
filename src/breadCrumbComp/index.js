import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    '& .MuiBreadcrumbs-ol': {
      padding: '15px'
    }
  },
  primaryText: {
    fontFamily: 'SegoeUI',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.36',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#808080'
  },
  currentPage: {
    fontFamily: 'SegoeUI',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.36',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#0f4c82'
  }
}))

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function BreadCrumbComp({ currentPage, primaryTextList }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {/* <Link color='inherit' href='/' onClick={handleClick}>
          Edit Profile
        </Link> */}
        {primaryTextList &&
          primaryTextList.length &&
          primaryTextList.map((value) => {
            return (
              <Typography className={classes.primaryText} key={value}>
                {value}
              </Typography>
            )
          })}
        <Typography className={classes.currentPage}>{currentPage}</Typography>
      </Breadcrumbs>
    </div>
  )
}
