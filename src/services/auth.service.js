import ExpirySession from 'expirysession';
import CurrenxiApi from './Api.instance';

const register = async (first_name, last_name, email, password, password_confirmation, phone_number) => {
  const response = await CurrenxiApi.post('/register', {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    phone_number,
  });

  if (response.data) {
    ExpirySession.set('user', response.data);
  }
  return response.data;
};

const login = async (email, password) => {
  const response = await CurrenxiApi.post('login', { email, password });

  if (response.data) {
    ExpirySession.set('user', response.data);
  }
  return response.data;
};

const logout = () => {
  ExpirySession.clear('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
