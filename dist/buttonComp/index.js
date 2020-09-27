"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonComp;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    button: {
      borderRadius: '10px',
      padding: '10px',
      background: '#26a0c9',
      minWidth: 'auto',
      '&:hover': {
        background: '#3ba7cb'
      }
    }
  };
});

function ButtonComp(props) {
  var classes = useStyles(props);
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "".concat(props.styleSet ? props.styleSet : '', " ").concat(classes.button, " "),
    onClick: props.onClick,
    disabled: props.isDisable ? props.isDisable : false,
    variant: "contained",
    color: "primary"
  }, props.label); // <div className={classes.root}>
  // </div>
}