import { GET_BUSINESS_DATA, SET_DATA } from '../constants/ActionTypes'

const initialState = {}

export default function businesses(state = initialState, action) {
  switch (action.type) {
    case GET_BUSINESS_DATA:
      return Object.assign({}, state, { data: action.data } );
      break;
    case SET_DATA:
      return Object.assign({}, state, { data: action.data });
      break;
    default:
      return state
  }
}
