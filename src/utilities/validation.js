/* eslint-disable no-useless-escape */
export const isEmpty = value => {
  if (!value) return true;
  return false;
};

export const isEmail = email => {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validatePhoneNumber = input_str => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(input_str);
};

export const isLength = password => {
  if (password.length < 6) return true;
  return false;
};

export const isMatch = (password, cf_password) => {
  if (password === cf_password) return true;
  return false;
};
