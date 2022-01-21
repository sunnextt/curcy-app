import axios from 'axios';
import ExpirySession from 'expirysession';


const instance = axios.create({
  baseURL: 'https://api.staging.currenxi.ng/api/v1/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  config => {
    const user = ExpirySession.get('user');
    if (user) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
