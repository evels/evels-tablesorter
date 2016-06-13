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
  let sectors = [];
  const data = json.map(d => {
    if (sectors.indexOf(d['Sector']) === -1) {
      sectors.push(d['Sector']);
    }
    return {
      name: d['Name'],
      sector: d['Sector'],
      marketCap: d['Market Cap']
    };
  });
  return {
    type: types.GET_BUSINESS_DATA,
    data,
    sortedByName: 'name',
    sortedDirection: 'ASC',
    sectors,
  }
}

export function setData(data, sortedByName, sortedDirection) {
  return {
    type: types.SET_DATA,
    data,
    sortedByName,
    sortedDirection
  }
}
