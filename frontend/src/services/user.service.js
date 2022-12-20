import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/test/`;
const API_URL = `http://192.168.0.50:9000/api/test/`;
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getSplitEntryBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();