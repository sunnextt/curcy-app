import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.staging.currenxi.ng/api/v1/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
