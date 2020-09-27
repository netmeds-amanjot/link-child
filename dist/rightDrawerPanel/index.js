"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawerWidth = 240;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      zIndex: 70 // [theme.breakpoints.down('xs')]: {
      //   width: '100%'
      // }

    },
    drawerPaperShadow: {
      width: drawerWidth,
      position: "relative"
    },
    drawerPaper: {
      width: drawerWidth,
      top: 70,
      paddingBottom: 70,
      boxShadow: "1px 0 6px rgba(0, 0, 0, 0.16)",
      backgroundColor: "#fefefe" // [theme.breakpoints.down('xs')]: {
      //   width: '100%'
      // }

    }
  };
});

var RightDrawerPanel = function RightDrawerPanel(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.drawerPaperShadow
  }), /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true,
    anchor: "right"
  }, props.children));
};

var _default = RightDrawerPanel;
exports.default = _default;