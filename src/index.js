import React from "react";
import ReactDOM from "react-dom";

import BreadCrumb from "./breadCrumbComp";
import Button from "./buttonComp";
import Check from "./checkComp";
import DatePicker from "./datePickerComp";
import Input from "./inputComp";
import LeftDrawerPanel from "./leftDrawerPanel";
import MultiSelect from "./multiSelectComp";
import RightDrawerPanel from "./rightDrawerPanel";
import Select from "./selectComp";
import TextArea from "./textAreaComp";

import defaultProps from "./defaultProps";
const Component = Input;
const props = defaultProps.input;

ReactDOM.render(<Component {...props} />, document.getElementById("root"));
