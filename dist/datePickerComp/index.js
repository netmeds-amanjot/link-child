"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePickerComp;

require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _DateRange = _interopRequireDefault(require("@material-ui/icons/DateRange"));

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _pickers = require("@material-ui/pickers");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    formControl: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    },
    Icon: {
      color: "#26a0c9",
      marginRight: 5
    },
    keyDatePicker: {
      margin: 0,
      "& .MuiInputBase-input": {
        padding: "8px 0px 8px 10px",
        fontSize: "12px"
      },
      "& .MuiIconButton-root": {
        padding: "5px 5px 5px 0"
      },
      "& .MuiInputBase-root": {
        padding: "0",
        borderRadius: "10px"
      }
    }
  };
});

function DatePickerComp(props) {
  var classes = useStyles();

  var _React$useState = _react.default.useState(new Date()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedDate = _React$useState2[0],
      setSelectedDate = _React$useState2[1];

  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date); // props.handleChange({
    //   target: { name: props.name, value: formatDate(date) },
    // });
  };

  return /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns2.default
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    className: "p-1"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_pickers.KeyboardDatePicker, {
    className: classes.keyDatePicker,
    margin: "normal",
    id: "date-picker-dialog" // label={props.label}
    // format="yyyy-dd-MM"
    ,
    views: props.views ? props.views : ["year", "date", "month"],
    value: selectedDate,
    inputVariant: "outlined",
    disablePast: props.isPastEnable ? props.isPastEnable : false,
    onChange: handleDateChange,
    style: {
      flex: 1
    },
    disabled: props.isDisable ? props.isDisable : false // InputAdornmentProps={{ position: "none" }}
    ,
    animateYearScrolling: true
  }))));
}