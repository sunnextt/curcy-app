import React, { useState } from 'react';
import WithdrawPageWrapper, { Button, FlexRow, Form, Input, Label, CNInput, VerticalBox, FlexRowC } from './styled';
import infologo from '../../assets/dashboard/infologo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { isEmpty } from 'utilities/validation';
import { userWithdrawalRequest } from 'redux/slice/userDataSlice';
import { showErrMsg } from 'utilities/notfication/nofication';

const initialState = {
  account_name: '',
  account_number: '',
  amount: '',
  bank_name: '',
};
const WithdrawPage = () => {
  const {
    user: { data },
  } = useSelector(state => state.auth);

  const [user, setUser] = useState(initialState);
  const [error, setError] = useState('');
  const [, setSucessful] = useState('');
  const [, setBank_name] = useState();

  const dispatch = useDispatch();

      const notify = message =>
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

  const { amount } = user;

  const { first_name, last_name, bank_account_name, bank_account_number, bank_name: bankName } = data;

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(amount)) {
      setError('Please fill the form amount field.');
      return;
    }
    dispatch(userWithdrawalRequest({ bankName, bank_account_name, bank_account_number, amount }))
      .unwrap()
      .then(response => {
        if (response) {
          notify(response.message);
        }
        setError('');
        setSucessful(true);
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
            <Input
              type="text"
              name="account_name"
              value={bank_account_name ? `${first_name} ${last_name}` : ''}
              defaultValue={bank_account_name ? `${first_name} ${last_name} ` : ''}
              placeholder={`${first_name} ${last_name} `}
              width="90%"
              onChange={handleChangeInput}
            />
          </VerticalBox>
          <VerticalBox>
            <Label>Bank Name</Label>
            <Input
              placeholder={bankName}
              defaultValue={bankName ? bankName : ''}
              value={bankName ? bankName : ''}
              name="account_name"
              type="text"
              width="90%"
              onChange={handleChange}
            />
          </VerticalBox>
        </FlexRow>
        <VerticalBox>
          <Label>Account Number</Label>
          <Input
            type="text"
            name="account_number"
            placeholder={bank_account_number}
            value={bank_account_number ? bank_account_number : ''}
            defaultValue={bank_account_number ? bank_account_number : ''}
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>Withdrawal amount</Label>
          <FlexRowC>
            <div className="currency_name">
              <h6>NGN</h6>
            </div>
            <CNInput type="text" name="amount" placeholder="1000" onChange={handleChangeInput} />
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
