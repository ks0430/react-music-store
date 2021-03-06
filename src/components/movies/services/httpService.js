import axios from 'axios';
import { toast } from 'react-toastify';

// If jwt is not set, it will be undefined, and the token will not set.

// Error handler
axios.interceptors.response.use(null, error => {
    const expectedError = 
      error.response && 
      error.response.status >= 400 && 
      error.response.status < 500;
  
    if (!expectedError) {
      toast.error("An unexpected error occurred.");
    }
  
    return Promise.reject(error);
  });

  function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
  }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}