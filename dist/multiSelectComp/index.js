"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MultiSelectComp;

var _react = _interopRequireDefault(require("react"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    multiSelect: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px"
      },
      "& .MuiFormControl-root .MuiInputBase-root.MuiOutlinedInput-root": {
        paddingLeft: "3px",
        paddingTop: "3px",
        paddingBottom: "3px"
      },
      "& .MuiChip-deleteIcon": {
        display: "none"
      }
    }
  };
});

function MultiSelectComp(_ref) {
  var options = _ref.options;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    className: "p-1"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    multiple: true,
    size: "small",
    limitTags: 2,
    id: "multiple-limit-tags",
    options: options,
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
        variant: "outlined",
        placeholder: "languages"
      }));
    },
    className: classes.multiSelect
  })));
}