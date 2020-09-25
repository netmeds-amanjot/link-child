import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        padding: theme.spacing(1),
        minWidth: 120,
        // width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    root: {
        color: '#26a0c9',
        '&$checked': {
            color: '#26a0c9',
        },
    }
}))

export default function CheckComp(props) {
    const classes = useStyles();



    const handleChange = (event) => {
        props.handleChange(event)
    };

    return (
        <FormControl className={classes.formControl}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.value ? true : false}
                        onChange={handleChange}
                        name={props.name}
                        color="default"
                        classes={{ root: classes.root }}
                    />
                }
                label={props.label}
            />
        </FormControl>
    );
}
