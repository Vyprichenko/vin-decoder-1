import vinAPI from '../../api/api'
import * as types from '../actionTypes';

export function fetchVin(code) {
  return async dispatch => {
    dispatch(fetchSearchVinStart())

    try {
      const response = await vinAPI.getDecodeVin(code);

      if (response && (response.status === 200) && response.results) {

        if (response.results.find(el => el.Variable === 'Error Code' && el.Value.split()[0] !== '0'  )) {
          dispatch(notFindInformation())
        }
  
        let currentVin = {name: code, ...response};
        
        dispatch(writeToCache(currentVin))
        dispatch(updateVin(currentVin))
      } else {
        dispatch(FetchVinFailure())
      }
    } catch (e) {
      dispatch(FetchVinFailure(e))
    }
  }
}

const takeFromCache = (code, state) => { // return undefined or elem
  return state.cache[0] && state.cache.find(el => code === el.name);
}

export function getData(code) {
  return (dispatch, getState) => {
    const state = getState().vinsSearch
    let cacheElem = takeFromCache(code, state);
  
    if (cacheElem) {
      dispatch(writeToCache(cacheElem))
      dispatch(setVin(cacheElem))
      return;
    }
  
    dispatch(fetchVin(code))
  }
}

export function fetchSearchVinStart() {
  return {
    type: types.FETCH_SEARCH_VIN_START,
  }
}

export function writeToCache(vin) {
  return {
    type: types.WRITE_TO_CACHE,
    vin
  }
}
export function updateVin(currentVin) {
  return {
    type: types.UPDATE_VIN,
    currentVin
  }
}

export function notFindInformation() {
  return {
    type: types.NOT_FIND_INFORMATION,
  }
}

export function FetchVinFailure(reason) {
  return {
    type: types.FETCH_VIN_FAILURE,
    payload: reason,
  }
}

export function setVin(currentVin) {
  return {
    type: types.SET_VIN,
    currentVin
  }
}