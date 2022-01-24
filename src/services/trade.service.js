import CurrenxiApi from './Api.instance';

const userTradeData = async () => {
  const response = await CurrenxiApi.get('trade');
  return response.data;
};
const userTransactionData = async () => {
  const response = await CurrenxiApi.get('transaction');
  return response.data;
};

const tradeService = {
  userTransactionData,
  userTradeData,
};

export default tradeService;
