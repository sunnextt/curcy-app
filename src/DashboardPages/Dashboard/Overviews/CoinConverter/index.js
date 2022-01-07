import React from 'react';
import CoinConverterWrapper, { Button, Card } from './styled';
import infologo from '../../../../assets/dashboard/infologo.png';
import sellLogo from '../../../../assets/dashboard/selllogo.png';
import CConverter from './Converter';


const SellImg = () => <img src={sellLogo} alt="Vector" width="15%" style={{ margin: '0 10px 0 0' }} />;


const CoinConverter = () => {
  return (
    <CoinConverterWrapper>
      <Card
        style={{
          width: '100%',
          background: '#EAEFFA',
          borderRadius: '16px',
        }}
      >
        <div className="news_content_div">
          <div>
            <h4>Coin Converter</h4>
            <h6>Enter amount to calculate coins.</h6>
          </div>
          <div>
            <CConverter />
          </div>
          <div>
            <Button href="" type="primary" icon={<SellImg />} size="large">
              Sell Coins
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '2rem 0' }}>
            <img src={infologo} alt="info icon" width="8%" /> <p>Amount calculated based on current coins price</p>
          </div>
        </div>
      </Card>
    </CoinConverterWrapper>
  );
};

export default CoinConverter;
