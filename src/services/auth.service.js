import ExpirySession from 'expirysession';
import CurrenxiAuthApi from './AuthApi.instance';
import CurrenxiApi from './Api.instance';

const register = async (first_name, last_name, email, password, password_confirmation, phone_number) => {
  const response = await CurrenxiAuthApi.post('/register', {
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
  const response = await CurrenxiAuthApi.post('login', { email, password });

  if (response.data) {
    ExpirySession.set('user', response.data);
  }
  return response.data;
};

const forgotpassword = async email => {
  const response = await CurrenxiApi.post('password/forget', { email });
  return response.data;
};

const resetpassword = async (password, password_confirmation) => {
  const response = await CurrenxiApi.post('password/reset', { password, password_confirmation });
  return response.data;
};

const logout = () => {
  ExpirySession.clear('user');
};

const authService = {
  register,
  login,
  forgotpassword,
  resetpassword,
  logout,
};

export default authService;
