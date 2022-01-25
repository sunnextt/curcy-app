import CurrenxiApi from './Api.instance';

const userProfileData = async (
  first_name,
  last_name,
  email,
  phone,
  kyc_verified,
  bank_name,
  account_number,
  bank_account_name,
) => {
  const response = await CurrenxiApi.post('profile/update', {
    first_name,
    last_name,
    email,
    phone,
    kyc_verified,
    bank_name,
    account_number,
    bank_account_name,
  });
  return response.data;
};
const userWithdrawalRequest = async (bank_name, account_name, account_number, amount) => {
  const response = await CurrenxiApi.post('withdraw/request', {
    bank_name,
    account_name,
    account_number,
    amount,
  });
  return response.data;
};

const userService = {
  userProfileData,
  userWithdrawalRequest,
};

export default userService;
