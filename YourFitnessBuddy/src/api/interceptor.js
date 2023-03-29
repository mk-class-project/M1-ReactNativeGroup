axios.interceptors.request.use((request) => {
    console.log("Request:", request);
    return request;
  });
  
  axios.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
  }, (error) => {
    console.log("Error:", error);
    return Promise.reject(error);
  });