"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    margin: {
      // margin: theme.spacing(1),
      width: "100%"
    },
    formContol: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        height: "30px"
      }
    },
    flexGrow: {
      flexGrow: 1
    },
    Icon: {
      color: "#26a0c9",
      marginRight: 5
    },
    inputBox: {
      "& .MuiInputBase-input": {
        fontSize: "12px"
      }
    }
  };
});

var InputComp = function InputComp(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.margin
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    alignItems: "flex-end",
    className: "p-1"
  }, props.children ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    className: classes.Icon
  }, props.children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    className: classes.flexGrow
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    className: classes.formContol,
    disabled: props.isDisable ? props.isDisable : false
  }, /*#__PURE__*/_react.default.createElement(_core.OutlinedInput, {
    id: props.label,
    placeholder: props.label,
    variant: "outlined",
    size: "small",
    className: classes.inputBox,
    endAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_core.IconButton // aria-label="toggle password visibility"
    // onClick={handleClickShowPassword}
    // onMouseDown={handleMouseDownPassword}
    , {
      edge: "end"
    }, props.leftIcon))
  })))));
};

var _default = InputComp;
exports.default = _default;