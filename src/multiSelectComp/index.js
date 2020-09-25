/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  multiSelect: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
    "& .MuiFormControl-root .MuiInputBase-root.MuiOutlinedInput-root": {
      paddingLeft: "3px",
      paddingTop: "3px",
      paddingBottom: "3px",
    },
    "& .MuiChip-deleteIcon": {
      display: "none",
    },
  },
}));

export default function MultiSelectComp({ options }) {
  const classes = useStyles();

  return (
    <Grid container className="p-1">
      <Grid item xs={12}>
        <Autocomplete
          multiple
          size="small"
          limitTags={2}
          id="multiple-limit-tags"
          options={options}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="languages" />
          )}
          className={classes.multiSelect}
        />
      </Grid>
    </Grid>
  );
}
