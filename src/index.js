import React from 'react'
import ReactDOM from 'react-dom'

import BreadCrumbComp from './breadCrumbComp'
import ButtonComp from './buttonComp'
import CheckComp from './checkComp'
import DatePickerComp from './datePickerComp'
import InputComp from './inputComp'
import LeftDrawerPanel from './leftDrawerPanel'
import MultiSelectComp from './multiSelectComp'
import RightDrawerPanel from './rightDrawerPanel'
import SelectComp from './selectComp'
import TextAreaComp from './textAreaComp'

export {
  BreadCrumbComp,
  ButtonComp,
  CheckComp,
  DatePickerComp,
  InputComp,
  LeftDrawerPanel,
  MultiSelectComp,
  RightDrawerPanel,
  SelectComp,
  TextAreaComp
}

if (process.env.REACT_APP_test) {
  ReactDOM.render(
    <React.StrictMode>
      {/* 
      <DatePickerComp />
      <MultiSelectComp />
    */}
      <BreadCrumbComp />
      <ButtonComp />
      <CheckComp />
      <InputComp />
      <LeftDrawerPanel />
      <RightDrawerPanel />
      <SelectComp />
      <TextAreaComp />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
