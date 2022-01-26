import React, { useState } from 'react';
import WithdrawPageWrapper, { Button, FlexRow, Form, Input, Label, CNInput, VerticalBox, FlexRowC } from './styled';
import infologo from '../../assets/dashboard/infologo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import { isEmpty } from 'utilities/validation';
import { userWithdrawalRequest } from 'redux/slice/userDataSlice';
import { showErrMsg } from 'utilities/notfication/nofication';

const { Option } = Select;

const initialState = {
  account_name: '',
  account_number: '',
  amount: '',
  bank_name: '',
};
const WithdrawPage = () => {
  const { banks: bankLists } = useSelector(state => state.banks);
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState('');

  const [bank_name, setBank_name] = useState();

  const dispatch = useDispatch();

  const notify = () =>
    toast.success('Withdrawal Request sucessful', {
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

  const handleChange = e => {
    console.log(e);
    setBank_name(e);
  };

  const { account_name, account_number, amount } = user;

  console.log(bank_name, account_name, account_number, amount);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(bank_name) || isEmpty(account_name) || isEmpty(account_number) || isEmpty(amount)) {
      setError('Please fill all the form field.');
      return
    }
    dispatch(userWithdrawalRequest({ bank_name, account_name, account_number, amount }))
      .unwrap()
      .then(() => {
        notify();
        setError('');
      })
      .catch(() => {
        setError('Enter valid detail');
      });
  };

  return (
    <WithdrawPageWrapper>
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
      <Form>
        <div style={{ margin: '1rem 0' }}>{error && showErrMsg(error)}</div>
        <FlexRow>
          <VerticalBox>
            <Label>Account Name</Label>
            <Input type="text" name="account_name" width="90%" onChange={handleChangeInput} />
          </VerticalBox>
          <VerticalBox>
            <Label>Bank Name</Label>
            <Select
              size="large"
              showSearch
              onChange={handleChange}
              className="form_select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              {bankLists ? (
                bankLists.map(({ code, name }) => (
                  <Option key={code} value={name}>
                    {name}
                  </Option>
                ))
              ) : (
                <div className="margin">
                  <Input placeholder="Bank Name" name="account_name" type="text" onChange={handleChange} />
                </div>
              )}
            </Select>{' '}
          </VerticalBox>
        </FlexRow>
        <VerticalBox>
          <Label>Account Number</Label>
          <Input type="text" name="account_number" width="45%" onChange={handleChangeInput} />
        </VerticalBox>
        <VerticalBox>
          <Label>Account Balance</Label>
          <FlexRowC>
            <div className="currency_name">
              <h6>NGN</h6>
            </div>
            <CNInput type="text" name="amount" placeholder="203,000" onChange={handleChangeInput} />
          </FlexRowC>
        </VerticalBox>
        <Button onClick={handleSubmit}>Withdraw</Button>
        <div className="info_msg">
          <img src={infologo} alt="info icon" width="23px" height="23px" />
          <h6>
            Withdrawals that fail to go into your bank account instantly due to bank network issues will be credited
            into this wallet instead and then you can try to withdraw again, Please note! Withdrawals are processed
            within 5 - 60 minutes during business hours, all withdrawals made outside business hours will be paid on
            resumption of business for the day. Business hours are 8Am - 10PM.
          </h6>
        </div>
      </Form>
    </WithdrawPageWrapper>
  );
};

export default WithdrawPage;
