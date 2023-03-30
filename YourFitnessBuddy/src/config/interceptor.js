import axios from 'axios';

const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      console.log('Response:', response.status);
      return response;
    },
    (error) => {
      console.log('Error:', error.response.status, error.message);
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;
