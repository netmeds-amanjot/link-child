import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import { Hidden } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 70,
    "& .MuiListItem-root": {
      padding: "5px 12px",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    left: "0",
    top: "0",
    boxShadow: "1px 0 6px rgba(0, 0, 0, 0.16)",
    backgroundColor: "#fefefe",
    [theme.breakpoints.up("md")]: {
      left: "58px",
      top: "70px",
      zIndex: "99",
      paddingBottom: 70,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItems: {
    "& .MuiListItemIcon-root": {
      minWidth: "38px",
    },
    "& .MuiListItemText-root": {
      whiteSpace: "nowrap",
      "& .MuiTypography-root": {
        fontSize: "0.9rem",
      },
    },
  },
  topHeaderLeftNavbar: {
    justifyContent: "center",
    "& .MuiListItemIcon-root": {
      minWidth: "auto",
    },
  },
}));

const LeftDrawerPanel = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {props.children}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {props.children}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default LeftDrawerPanel;
