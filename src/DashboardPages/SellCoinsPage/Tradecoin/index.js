import React from 'react';
import TradeInputWrap, { Button, Input, Option, RateXchangeDiv, Select } from './styled';
import { FaEquals } from 'react-icons/fa';
import infologo from '../../../assets/dashboard/infologo.png';

const TradeInputDiv = () => {
  return (
    <TradeInputWrap>
      <RateXchangeDiv>
        <div>
          <h6>Amount in USD</h6>
          <div>
            <Select>
              <Option>USD</Option>
            </Select>
            <Input type="text" defaultValue="203,000" />
          </div>
        </div>
        <div>
          <h6 className="equal_to">
            <FaEquals size="20" />
          </h6>
        </div>
        <div>
          <h6>Amount in Naira</h6>
          <div>
            <Select>
              <Option>NGN</Option>
            </Select>
            <Input type="text" defaultValue="203,000" />
          </div>
        </div>
      </RateXchangeDiv>
      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <img src={infologo} alt="info icon" width="5%" />
        <span>$5 is the minimum trade amount accepted. Your transaction will be completed automatically!</span>
      </div>
      <div className="btn_div">
        <Button type="primary">
          <h6>Sell Coin</h6>
        </Button>
        <p>
          Funds will be sent to your bank account after transaction is successfully completed by you and processed by
          us.
        </p>
      </div>
    </TradeInputWrap>
  );
};

export default TradeInputDiv;
