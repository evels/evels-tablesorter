import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export function getBusinessData(input, previous) {
  return dispatch => {
    return fetch(`http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents-financials.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveBusinessData(json)))
  }
}

function receiveBusinessData(json) {
  const data = json.map(d => {
    return {
      name: d['Name'],
      sector: d['Sector'],
      marketCap: d['Market Cap']
    };
  });
  return {
    type: types.GET_BUSINESS_DATA,
    data
  }
}

export function setData(data) {
  return {
    type: types.SET_DATA,
    data
  }
}
