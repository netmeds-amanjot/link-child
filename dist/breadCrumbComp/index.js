"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreadCrumbComp;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _NavigateNext = _interopRequireDefault(require("@material-ui/icons/NavigateNext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2)
      },
      '& .MuiBreadcrumbs-ol': {
        padding: '15px'
      }
    },
    primaryText: {
      fontFamily: 'SegoeUI',
      fontSize: '14px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.36',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#808080'
    },
    currentPage: {
      fontFamily: 'SegoeUI',
      fontSize: '14px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.36',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#0f4c82'
    }
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BreadCrumbComp(_ref) {
  var currentPage = _ref.currentPage,
      primaryTextList = _ref.primaryTextList;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, {
    separator: /*#__PURE__*/_react.default.createElement(_NavigateNext.default, {
      fontSize: "small"
    }),
    "aria-label": "breadcrumb"
  }, primaryTextList && primaryTextList.length && primaryTextList.map(function (value) {
    return /*#__PURE__*/_react.default.createElement(_Typography.default, {
      className: classes.primaryText,
      key: value
    }, value);
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.currentPage
  }, currentPage)));
}