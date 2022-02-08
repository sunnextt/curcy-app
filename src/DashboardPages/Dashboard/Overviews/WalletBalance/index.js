import React from 'react';
import { Col, Row } from 'antd';
import WalletWrapper, { Button, Card } from './styled';
import Vector from '../../../../assets/dashboard/Vector.png';
import ReferReward from '../ReferRewards';
import { useMediaQuery } from 'usehooks-ts';

const VectorImg = () => <img src={Vector} alt="Vector" width="20%" style={{ margin: '0 10px 0 0' }} />;

const WalletBalance = ({ data, handleWithdraw }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  const { wallet } = data;

  return (
    <WalletWrapper>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={14} lg={15} >
          <Card style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_contents">
              <div>
                <h6>Wallet Balance</h6>
                <h2>₦ {wallet}</h2>
              </div>
              <div>
                <Button
                  href="##"
                  type="primary"
                  shape="round"
                  icon={<VectorImg />}
                  size="large"
                  onClick={handleWithdraw}
                >
                  Withdraw
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={10} lg={9}>
          <ReferReward />
        </Col>
      </Row>
    </WalletWrapper>
  );
};

export default WalletBalance;
