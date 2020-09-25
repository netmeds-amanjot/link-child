import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // minWidth: 120,
    // width: '90%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiSelect-select": {
      fontSize: "12px",
      textAlign: "left",
      padding: "6px 10px",
    },
    "& .MuiInputBase-root": {
      borderRadius: "10px",
    },
  },
  placeHolderValue: {
    color: "#9F9F9F",
  },
  selectBox: {
    flex: 1,
  },
  selectEmpty: {
    flex: 1,
    marginTop: theme.spacing(2),
    background: "#fff",
    borderRadius: "22px",
    padding: "3px",
    textAlign: "center",
    "&:before, &:after,& .MuiSelect-icon": {
      display: "none",
    },
    "& .MuiSelect-select:focus": {
      background: "transparent",
    },
  },
  Icon: {
    color: "#26a0c9",
    marginRight: 5,
  },
}));

export default function SelectComp(props) {
  const classes = useStyles();
  const [selected, changeSelection] = useState(
    props.selected != null ? props.selected : ""
  );

  const handleChange = (event) => {
    changeSelection(event.target.value);
    props.handleChange(event);
  };

  return (
    <Grid container alignItems="flex-end" className="p-1">
      <Grid item xs={12}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          disabled={props.isDisable ? props.isDisable : false}
        >
          {props.children && (
            <div className={classes.Icon}>{props.children}</div>
          )}
          {props.placeHolder && (<InputLabel htmlFor="age-native-simple">{props.placeHolder}</InputLabel>)}
          <Select
            value={selected}
            onChange={(e) => handleChange(e)}
            displayEmpty={props.displayEmpty || true}
            
            className={
              `${(props.module === "timeline"
                ? classes.selectEmpty
                : classes.selectBox)} ${props.className}`
            }
            inputProps={{ "aria-label": props.label }}
            name={props.name}
          >
            {!props.selected && (
              <MenuItem value={""} className={classes.placeHolderValue}>
                {props.label}
              </MenuItem>
            )}
            {props.options &&
              props.options.map((data) => {
                return (
                  <MenuItem value={data.value} key={data.value}>
                    {data.label}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
