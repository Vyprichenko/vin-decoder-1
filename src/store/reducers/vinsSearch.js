import * as types from '../actionTypes';

const initialState = {
  currentVin : null,
  cache : [],
  loading: false,
  serverError: null,
  searchNotFind: null,
}

export default function vinsSearch(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SEARCH_VIN_START:
      return {
        ...state, loading: true,
      }
    case types.NOT_FIND_INFORMATION:
      return {
        ...state, 
        currentVin: null, 
        loading: false, 
        searchNotFind: 'Sorry, we could not find information.',
        serverError: null,
      }
    case types.WRITE_TO_CACHE:
      return {
        ...state, 
        cache: [
          action.vin,
          ...[...state.cache].slice(0, 4),
        ],
      }
    case types.SERVER_ERROR:
      return {
        ...state, 
        loading: false,
        serverError: action.payload,
      }
    case types.UPDATE_VIN:
      return {
        ...state, 
        currentVin: action.currentVin,
        loading: false,
        searchNotFind: null,
        serverError: null,
      }
    case types.SET_VIN:
      return {
        ...state, 
        searchNotFind: null, 
        currentVin: action.currentVin, 
        serverError: null,
      }
    default:
      return state
  }
}