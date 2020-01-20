import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api/'
})

const vinAPI = {}

const _transformParams = (response) => {
  return {
    status: response.status,
    message: response.data.Message,
    results: response.data.Results,
  }
}

vinAPI.getVehicleVariableList = () => {
  return axiosInstance.get(`vehicles/getvehiclevariablelist?format=json`)
                      .then(response => _transformParams(response))
                      .catch(reason => reason);
}

vinAPI.getVariableVin = code => {
  return vinAPI.getVehicleVariableList()
               .then(res => res.results.find(el => el.ID === +code))
               .catch(reason => reason);
}

export default vinAPI
