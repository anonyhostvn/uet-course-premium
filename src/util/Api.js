import axios from 'axios';

export default axios.create({
  baseURL: `http://HOSTNAME.COM/jwtauth/api/`,
  headers: {
    'Content-Type': 'application/json',
  }
});
