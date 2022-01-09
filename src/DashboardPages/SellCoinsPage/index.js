import { Divider } from 'antd';
import React from 'react';
import CardContext from './Card';
import SellcoinsContainer from './styled';
import TradeInputDiv from './Tradecoin';

const SellcoinsPage = () => {
  return (
    <SellcoinsContainer>
      <div className="step_one">
        <div>
          <h3>Sell Coins</h3>
          <h5>Step One</h5>
          <h6 style={{marginBottom: "2rem"}}>Select the coins you wish to sell below</h6>
        </div>
        <div className="card_div">
          <CardContext />
          <CardContext />
          <CardContext />
          <CardContext />
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
          <TradeInputDiv />
        </div>
      </div>
    </SellcoinsContainer>
  );
};

export default SellcoinsPage;
