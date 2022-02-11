import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSellCoin } from 'redux/slice/tradeDataSlice';
import CardContext from './Card';
import SellcoinsContainer from './styled';
import TradeInputDiv from './Tradecoin';
import { Button } from './Tradecoin/styled';
import { ToastContainer, toast } from 'react-toastify';
import { showErrMsg } from 'utilities/notfication/nofication';
import { clearMessage } from 'redux/slice/MessageSlice';

const SellcoinsPage = () => {
  const dispatch = useDispatch();
  const [inputCheckVal, setInputCheckVal] = useState('');
  const [inputVal, setInputVal] = useState('');
  const { message } = useSelector(state => state.message);
  const [, setSuccessUpdate] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    console.log(e);
    setInputCheckVal({
      [name]: value,
    });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };


  const { coin_id } = inputCheckVal;
  const { naira_amount, usd_amount } = inputVal;

  const notify = message =>
    // eslint-disable-next-line no-template-curly-in-string
    toast.success(message, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  console.log(coin_id);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(userSellCoin({ coin_id, naira_amount, usd_amount }))
      .unwrap()
      .then(response => {
        if (response) {
          setSuccessUpdate(true);
          notify(response.message);
          setError(false);
        }
      })
      .catch(error => {
        if (error) {
          setError(true);
        }
      });
  };

  return (
    <SellcoinsContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form>
        {error && showErrMsg(message)}
        <div className="step_one">
          <div>
            <h3>Sell Coins</h3>
            <h5>Step One</h5>
            <h6 style={{ marginBottom: '2rem' }}>Select the coins you wish to sell below</h6>
          </div>
          <div className="card_div">
            <CardContext handleChangeInput={handleChangeInput} />
          </div>
        </div>
        <div>
          <hr className="divider" />
        </div>
        <div className="step_two">
          <div>
            <h5>Step Two</h5>
            <h6>Amount of Trade.</h6>
            <p>Enter how much coins in USD you would like to sell, to see how much naira you will recieve.</p>
          </div>
          <div>
            <TradeInputDiv handleChangeInput={handleInput} handleSubmit={handleSubmit} />
          </div>
        </div>
        <div className="btn_div">
          <Button type="primary" onClick={handleSubmit}>
            <h6>Sell Coin</h6>
          </Button>
          <p>
            Funds will be sent to your bank account after transaction is successfully completed by you and processed by
            us.
          </p>
        </div>
      </form>
    </SellcoinsContainer>
  );
};

export default SellcoinsPage;
