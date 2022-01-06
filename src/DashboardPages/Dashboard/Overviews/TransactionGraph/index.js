import React from 'react';
import { Col, Row } from 'antd';
import TransactionGraphWrapper, { Button, Card } from './styled';
import Graph from './TransactionGraph';
import AllCryptoNews from '../AllcryptoNews';

const TransactionGraph = () => {
  return (
    <TransactionGraphWrapper>
      <Row>
        <Col xs={24} sm={24} md={16} lg={15} style={{ paddingRight: '30px' }}>
          <Card size="small" style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_title">
              <h5>Transaction Graph</h5>
              <Button type="link">7 days </Button>
            </div>
            <div className="table_contents">
              <Graph />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={9}>
          <AllCryptoNews />
        </Col>
      </Row>
    </TransactionGraphWrapper>
  );
};

export default TransactionGraph;
