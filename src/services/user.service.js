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


const userService = {
  userProfileData,
};

export default userService;
