import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    // margin: theme.spacing(1),
    width: "100%",
  },
  formContol: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      height: "30px",
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  Icon: {
    color: "#26a0c9",
    marginRight: 5,
  },
  inputBox: {
    "& .MuiInputBase-input": {
      fontSize: "12px",
    },
  },
}));

const InputComp = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Grid container alignItems="flex-end" className="p-1">
        {props.children ? (
          <Grid item className={classes.Icon}>
            {props.children}
          </Grid>
        ) : (
          <></>
        )}
        <Grid item className={classes.flexGrow}>
          <FormControl
            className={classes.formContol}
            disabled={props.isDisable ? props.isDisable : false}
          >
            <OutlinedInput
              id={props.label}
              placeholder={props.label}
              variant="outlined"
              size="small"
              className={classes.inputBox}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {props.leftIcon}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputComp;
