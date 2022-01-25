import React from 'react';
import { GrBitcoin } from 'react-icons/gr';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import CContext from './styled';

const CardContext = ({ handleChangeInput, inputColor }) => {
  return (
    <CContext inputColor={inputColor}>
      <a href="##">
        <input type="radio" name="coin_id" id="coin_id" value="1" onChange={handleChangeInput} />
        <label htmlFor="coin_id">
          <div className="btcdiv">
            <GrBitcoin size="26" className="icon_btc" />
            <MdOutlineRadioButtonChecked size="26" className="icon_radio" />
          </div>
          <div className="btcamt">
            <p>Paxful BTC</p>
            <h4>₦548</h4>
          </div>
        </label>
      </a>
    </CContext>
  );
};

export default CardContext;
