"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _MoveToInbox = _interopRequireDefault(require("@material-ui/icons/MoveToInbox"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _styles = require("@material-ui/core/styles");

var _RecentActors = _interopRequireDefault(require("@material-ui/icons/RecentActors"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      zIndex: 70,
      "& .MuiListItem-root": {
        padding: "5px 12px"
      }
    },
    drawer: _defineProperty({}, theme.breakpoints.up("md"), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({}, theme.breakpoints.up("md"), {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    }),
    menuButton: _defineProperty({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: _defineProperty({
      width: drawerWidth,
      left: "0",
      top: "0",
      boxShadow: "1px 0 6px rgba(0, 0, 0, 0.16)",
      backgroundColor: "#fefefe"
    }, theme.breakpoints.up("md"), {
      left: "58px",
      top: "70px",
      zIndex: "99",
      paddingBottom: 70
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    listItems: {
      "& .MuiListItemIcon-root": {
        minWidth: "38px"
      },
      "& .MuiListItemText-root": {
        whiteSpace: "nowrap",
        "& .MuiTypography-root": {
          fontSize: "0.9rem"
        }
      }
    },
    topHeaderLeftNavbar: {
      justifyContent: "center",
      "& .MuiListItemIcon-root": {
        minWidth: "auto"
      }
    }
  };
});

var LeftDrawerPanel = function LeftDrawerPanel(props) {
  var window = props.window;
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var container = window !== undefined ? function () {
    return window().document.body;
  } : undefined;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders"
  }, /*#__PURE__*/_react.default.createElement(_core.Hidden, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    container: container,
    variant: "temporary",
    anchor: theme.direction === "rtl" ? "right" : "left",
    open: props.mobileOpen,
    onClose: props.handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, props.children)), /*#__PURE__*/_react.default.createElement(_core.Hidden, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, props.children))));
};

var _default = LeftDrawerPanel;
exports.default = _default;