import axios from 'axios';

function setJwt(jwt) {
    axios.defaults.headers.common["Authorization"] = !jwt ? 'Bearer' : jwt;
  }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};