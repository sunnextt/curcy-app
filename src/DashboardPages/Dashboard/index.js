import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TradeHistory from './Overviews/TradeHistory';
import TransactionGraph from './Overviews/TransactionGraph';
import WalletBalance from './Overviews/WalletBalance';
import { useMediaQuery } from 'usehooks-ts';
import { useSelector } from 'react-redux';
import ConfirmWithwalModal from './Overviews/ConfirmWithdrawal';
import { isEmpty } from 'utilities/validation';
import { userWithdrawalRequest } from 'redux/slice/userDataSlice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const initialState = {
  password: '',
  password_confirmation: '',
  err: '',
  success: '',
};

const DashboardPage = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user: currentUser } = useSelector(state => state.auth);
  const { trade: UsertradeData } = useSelector(state => state.trade);

  const { data: tradeSourceData } = UsertradeData;

  const [tradeData, setTradeData] = useState('');
  const [data, setData] = useState('');

  const dispatch = useDispatch();

  const notify = () =>
    toast.success('🦄 Withdrawal Request sucessful', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  const { bank_name, account_name, account_number, amount } = user;

  useEffect(() => {
    if (currentUser) {
      setData(currentUser.data);
    }

    if (tradeSourceData) {
      setTradeData(tradeSourceData);
    }
  }, [UsertradeData, currentUser, tradeData, tradeSourceData]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleWithdraw = () => {
    showModal();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(bank_name) || isEmpty(account_name) || isEmpty(account_number) || isEmpty(amount)) {
      setError('Please fill all the form field.');
    }
    setLoading(true);

    dispatch(userWithdrawalRequest({ bank_name, account_name, account_number, amount }))
      .unwrap()
      .then(() => {
        setIsModalVisible(false);
        notify();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <ConfirmWithwalModal
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleOk={handleOk}
        handleChangeInput={handleChangeInput}
        isModalVisible={isModalVisible}
        error={error}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {tradeData && (
        <>
          <Row>
            <Col span={24}>
              <WalletBalance data={data} handleWithdraw={handleWithdraw} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TradeHistory data={data} matches={matches} tradeData={tradeData} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TransactionGraph data={data} matches={matches} tradeData={tradeData} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default DashboardPage;
