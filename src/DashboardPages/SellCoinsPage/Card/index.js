import { Radio } from 'antd';

import React, { useState } from 'react';
import { GrBitcoin } from 'react-icons/gr';
// import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import CContext, { RadioDiv } from './styled';

const CardContext = ({ handleChangeInput }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    handleChangeInput(e);
    setValue(e.target.value);
  };

  return (
    <RadioDiv>
      <Radio.Group onChange={onChange} name="coin_id" value={value}>
        <Radio value={1}>
          <CContext className={value === 1 ? 'selected' : 'not_selected'}>
            <GrBitcoin size="26" className="icon_btc" />
            <div className="btcamt">
              <p>Paxful BTC</p>
              <h4>₦548</h4>
            </div>
          </CContext>
        </Radio>
        <Radio value={2}>
          <CContext className={value === 2 ? 'selected' : 'not_selected'}>
            <GrBitcoin size="26" className="icon_btc" />
            <div className="btcamt">
              <p>Bitcoins</p>
              <h4>₦548</h4>
            </div>
          </CContext>
        </Radio>
        <Radio value={3}>
          <CContext className={value === 3 ? 'selected' : 'not_selected'}>
            <GrBitcoin size="26" className="icon_btc" />
            <div className="btcamt">
              <p>LTC</p>
              <h4>₦548</h4>
            </div>
          </CContext>
        </Radio>
        <Radio value={4}>
          <CContext className={value === 4 ? 'selected' : 'not_selected'}>
            <GrBitcoin size="26" className="icon_btc" />
            <div className="btcamt">
              <p>PM</p>
              <h4>₦548</h4>
            </div>
          </CContext>
        </Radio>
      </Radio.Group>
    </RadioDiv>
  );
};

export default CardContext;
