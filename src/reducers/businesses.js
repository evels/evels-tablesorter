import { GET_BUSINESS_DATA, SET_DATA } from '../constants/ActionTypes'

const initialState = {}

export default function businesses(state = initialState, action) {
  switch (action.type) {
    case GET_BUSINESS_DATA:
    case SET_DATA:
      return Object.assign({}, state, {
        data: action.data,
        sortedByName: action.sortedByName,
        sortedDirection: action.sortedDirection,
        sectors: action.sectors,
      });
      break;
    default:
      return state
  }
}
