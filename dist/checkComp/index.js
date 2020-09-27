"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckComp;

var _react = _interopRequireDefault(require("react"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    formControl: {
      padding: theme.spacing(1),
      minWidth: 120,
      // width: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    root: {
      color: '#26a0c9',
      '&$checked': {
        color: '#26a0c9'
      }
    }
  };
});

function CheckComp(props) {
  var classes = useStyles();

  var handleChange = function handleChange(event) {
    props.handleChange(event);
  };

  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      checked: props.value ? true : false,
      onChange: handleChange,
      name: props.name,
      color: "default",
      classes: {
        root: classes.root
      }
    }),
    label: props.label
  }));
}