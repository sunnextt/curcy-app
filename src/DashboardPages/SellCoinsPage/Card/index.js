import React from 'react';
import { GrBitcoin } from 'react-icons/gr';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import CContext from './styled';

const CardContext = () => {
  return (
    <CContext>
      <div className="btcdiv">
        <GrBitcoin size="26" className="icon_btc" />
        <MdOutlineRadioButtonChecked size="26" className="icon_radio" />
      </div>
      <div className="btcamt">
        <p>Paxful BTC</p>
        <h4>₦548</h4>
      </div>
    </CContext>
  );
};

export default CardContext;
