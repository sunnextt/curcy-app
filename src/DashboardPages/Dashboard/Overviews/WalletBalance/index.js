import React from 'react';
import { Col, Row } from 'antd';
import WalletWrapper, { Button, Card } from './styled';
import Vector from '../../../../assets/dashboard/Vector.png';
import ReferReward from '../ReferRewards';

const VectorImg = () => <img src={Vector} alt="Vector" width="20%" style={{ margin: '0 10px 0 0' }} />;

const WalletBalance = () => {
  return (
    <WalletWrapper>
      <Row>
        <Col xs={24} sm={24} md={16} lg={15} style={{ paddingRight: '30px'}}>
          <Card style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_contents">
              <div>
                <h6>Wallet Balance</h6>
                <h2>₦548.00</h2>
              </div>
              <div>
                <Button href="##" type="primary" shape="round" icon={<VectorImg />} size="large">
                  Withdraw
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={9}>
          <ReferReward/>
        </Col>
      </Row>
    </WalletWrapper>
  );
};

export default WalletBalance;
