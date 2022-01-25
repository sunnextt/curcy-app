import React from 'react';
import TradeInputWrap, { Input, Option, RateXchangeDiv, Select } from './styled';
import { FaEquals } from 'react-icons/fa';
import infologo from '../../../assets/dashboard/infologo.png';

const TradeInputDiv = ({ handleChangeInput }) => {
  return (
    <TradeInputWrap>
      <RateXchangeDiv>
        <div>
          <h6>Amount in USD</h6>
          <div>
            <Select>
              <Option>USD</Option>
            </Select>
            <Input type="text" name="usd_amount" defaultValue="203000" onChange={handleChangeInput} />
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
            <Input type="text" name="naira_amount" defaultValue="203000" onChange={handleChangeInput} />
          </div>
        </div>
      </RateXchangeDiv>
      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <img src={infologo} alt="info icon" width="5%" />
        <span>$5 is the minimum trade amount accepted. Your transaction will be completed automatically!</span>
      </div>
    </TradeInputWrap>
  );
};

export default TradeInputDiv;
