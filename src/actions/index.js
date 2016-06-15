import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import { FINANCIALDATA } from '../constants/Financials'

export function getBusinessData(input, previous) {
  // return dispatch => {
  //   return fetch(`http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents-financials.json`)
  //     .then(response => response.json())
  //     .then(json => dispatch(receiveBusinessData(json)))
  // }
  return receiveBusinessData(FINANCIALDATA);
}

function receiveBusinessData(json) {
  return {
    type: types.GET_BUSINESS_DATA,
    data: json,
  }
}

export function setData(data, sortedByName, sortedDirection, checkedSector) {
  return {
    type: types.SET_DATA,
    data: data,
    sortedByName,
    sortedDirection
  }
}

export function setCheckedData(checkedSector) {
  return {
    type: types.SET_CHECKED_DATA,
    checkedSector,

  }
}
