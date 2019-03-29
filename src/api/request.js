import axios from 'axios'
const request = axios.create({
    baseURL: 'http://10.86.33.191:9999/api',
    timeout: 5000
})
// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default request