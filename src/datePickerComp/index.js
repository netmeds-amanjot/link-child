import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import { formatDate } from "../../Patient/utils/helper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  Icon: {
    color: "#26a0c9",
    marginRight: 5,
  },
  keyDatePicker: {
    margin: 0,
    "& .MuiInputBase-input": {
      padding: "8px 0px 8px 10px",
      fontSize: "12px",
    },
    "& .MuiIconButton-root": {
      padding: "5px 5px 5px 0",
    },
    "& .MuiInputBase-root": {
      padding: "0",
      borderRadius: "10px",
    },
  },
}));
export default function DatePickerComp(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // props.handleChange({
    //   target: { name: props.name, value: formatDate(date) },
    // });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className="p-1">
        <Grid item xs={12} className={classes.formControl}>
          {/* <DateRangeIcon className={classes.Icon} /> */}
          <KeyboardDatePicker
            className={classes.keyDatePicker}
            margin="normal"
            id="date-picker-dialog"
            // label={props.label}
            // format="yyyy-dd-MM"
            views={props.views ? props.views : ["year", "date", "month"]}
            value={selectedDate}
            inputVariant="outlined"
            disablePast={props.isPastEnable ? props.isPastEnable : false}
            onChange={handleDateChange}
            style={{ flex: 1 }}
            disabled={props.isDisable ? props.isDisable : false}
            // InputAdornmentProps={{ position: "none" }}
            animateYearScrolling={true}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
