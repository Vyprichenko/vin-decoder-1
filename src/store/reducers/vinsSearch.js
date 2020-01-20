import * as types from '../actionTypes';

const initialState = {
  currentVin : null,
  cache : [],
  loading: false,
  error: null,
  searchResults: null,
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
        searchResults: 'Sorry, we could not find information!',
        error: null,
      }
    case types.WRITE_TO_CACHE:
      return {
        ...state, 
        cache: [
          action.vin,
          ...[...state.cache].slice(0, 4),
        ],
      }
    case types.FETCH_VIN_FAILURE:
      return {
        ...state, 
        loading: false,
        error: 'Произошла какай-то ошибка на сервере!',
      }
    case types.UPDATE_VIN:
      return {
        ...state, 
        currentVin: action.currentVin,
        loading: false,
        searchResults: null,
        error: null,
      }
    case types.SET_VIN:
      return {
        ...state, 
        searchResults: null, 
        currentVin: action.currentVin, 
        error: null,
      }
    default:
      return state
  }
}