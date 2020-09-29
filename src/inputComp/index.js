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
import { PowerInputSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    // margin: theme.spacing(1),
    width: (props) => props.width || "100%",
  },
  formControl: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: (props) => props.borderRadius || "10px",
      height: (props) => props.height || "30px",
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  icon: {
    color: (props) => props.iconColor || "#26a0c9",
    marginRight: (props) => props.marginRight || 5,
  },
  inputBox: {
    "& .MuiInputBase-input": {
      fontSize: (props) => props.inputFontSize || "12px",
    },
  },
}));

const InputComp = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.margin}>
      {" "}
      <Grid container alignItems="flex-end" className="p-1">
        {props.children ? (
          <Grid item className={classes.icon}>
            {props.children}
          </Grid>
        ) : (
          <></>
        )}
        <Grid item className={classes.flexGrow}>
          <FormControl
            className={classes.formControl}
            disabled={props.isDisable ? props.isDisable : false}
          >
            {props.topLabel && (
              <InputLabel className={classes.topLabel} htmlFor={props.for}>
                {props.label}
              </InputLabel>
            )}
            <div className={classes.leftLabel}>
              {props.leftLabel && <span>{props.label}</span>}
              <OutlinedInput
                id={props.id}
                placeholder={props.placeholder}
                variant={props.variant || "outlined"}
                size={props.size || "small"}
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
            </div>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputComp;
