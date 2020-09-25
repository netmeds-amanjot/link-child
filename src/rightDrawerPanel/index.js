import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 70,
    // [theme.breakpoints.down('xs')]: {
    //   width: '100%'
    // }
  },
  drawerPaperShadow: {
    width: drawerWidth,
    position: "relative",
  },
  drawerPaper: {
    width: drawerWidth,
    top: 70,
    paddingBottom: 70,
    boxShadow: "1px 0 6px rgba(0, 0, 0, 0.16)",
    backgroundColor: "#fefefe",
    // [theme.breakpoints.down('xs')]: {
    //   width: '100%'
    // }
  },
}));

const RightDrawerPanel = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.drawerPaperShadow}></div>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open={true}
        anchor={"right"}
      >
        {props.children}
      </Drawer>
    </div>
  );
};

export default RightDrawerPanel;
