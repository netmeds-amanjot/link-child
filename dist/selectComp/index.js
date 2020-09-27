"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectComp;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    formControl: {
      // minWidth: 120,
      // width: '90%',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& .MuiSelect-select": {
        fontSize: "12px",
        textAlign: "left",
        padding: "6px 10px"
      },
      "& .MuiInputBase-root": {
        borderRadius: "10px"
      }
    },
    placeHolderValue: {
      color: "#9F9F9F"
    },
    selectBox: {
      flex: 1
    },
    selectEmpty: {
      flex: 1,
      marginTop: theme.spacing(2),
      background: "#fff",
      borderRadius: "22px",
      padding: "3px",
      textAlign: "center",
      "&:before, &:after,& .MuiSelect-icon": {
        display: "none"
      },
      "& .MuiSelect-select:focus": {
        background: "transparent"
      }
    },
    Icon: {
      color: "#26a0c9",
      marginRight: 5
    }
  };
});

function SelectComp(props) {
  var classes = useStyles();

  var _useState = (0, _react.useState)(props.selected != null ? props.selected : ""),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      changeSelection = _useState2[1];

  var handleChange = function handleChange(event) {
    changeSelection(event.target.value);
    props.handleChange(event);
  };

  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    alignItems: "flex-end",
    className: "p-1"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    variant: "outlined",
    className: classes.formControl,
    disabled: props.isDisable ? props.isDisable : false
  }, props.children && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.Icon
  }, props.children), props.placeHolder && /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    htmlFor: "age-native-simple"
  }, props.placeHolder), /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: selected,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    displayEmpty: props.displayEmpty || true,
    className: "".concat(props.module === "timeline" ? classes.selectEmpty : classes.selectBox, " ").concat(props.className),
    inputProps: {
      "aria-label": props.label
    },
    name: props.name
  }, !props.selected && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "",
    className: classes.placeHolderValue
  }, props.label), props.options && props.options.map(function (data) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: data.value,
      key: data.value
    }, data.label);
  })))));
}