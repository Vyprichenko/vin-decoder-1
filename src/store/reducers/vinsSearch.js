import * as types from '../actionTypes';

const initialState = {

}

export default function vinsSearch(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SEARCH_VIN_START:
      return {
        ...state
      }
    default:
      return state
  }
}