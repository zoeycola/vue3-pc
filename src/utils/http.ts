import axios, {type AxiosRequestConfig } from 'axios';
// axios.defaults.baseURL = localStorage.getItem('BASE_URL')?.toString();
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 20 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true


axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {

    config.params = {
        ...config.params,
        t: Date.now(),
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  (Response) => {
    return Response
  },
  function (error) {
    return Promise.reject(error);
  }
)

interface Http {
  get<T>(url: string, params?: unknown) : Promise<T>
}

const http: Http = {
  get(url,  params) {
    return new Promise((resolve,reject) => {
      axios.get(url, { params} )
      .then((res)=> {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default http