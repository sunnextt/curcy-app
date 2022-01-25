import CurrenxiApi from './Api.instance';

const userTradeData = async () => {
  const response = await CurrenxiApi.get('trade');
  return response.data;
};

const userTransactionData = async () => {
  const response = await CurrenxiApi.get('transaction');
  return response.data;
};

const sellCoin = async (coin_id, naira_amount, usd_amount) => {
  const response = await CurrenxiApi.post('coin/sell', {
    coin_id,
    naira_amount,
    usd_amount,
  });
  return response.data;
};

const tradeService = {
  userTransactionData,
  userTradeData,
  sellCoin,
};

export default tradeService;
