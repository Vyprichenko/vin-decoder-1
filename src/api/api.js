import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api/'
})

const vinAPI = {}

const _transformParams = (response) => {
  return {
    status: response.status,
    message: response.data.Message,
    results: _filterResults(response.data.Results),
  }
}
const _filterResults = (data) => {
  let results = [...data];

  return results.filter(el => (el.Value !== '') && (el.Description !== '') && 
                              (el.Value !== null) && (el.Description !== null));
}

vinAPI.getVehicleVariableList = () => {
  return axiosInstance.get(`vehicles/getvehiclevariablelist?format=json`)
                      .then(response => _transformParams(response))
                      .catch(reason => reason);
}

vinAPI.getDecodeVin = code => {
  return axiosInstance.get(`vehicles/decodevin/${code}?format=json`)
                      .then(response => _transformParams(response))
                      .catch(reason => reason);
}

vinAPI.getVariableVin = code => {
  return vinAPI.getVehicleVariableList()
               .then(res => res.results.find(el => el.ID === +code))
               .catch(reason => reason);
}

export default vinAPI
