import React from 'react';
import { Col, Row } from 'antd';
import TransactionGraphWrapper, { Button, Card } from './styled';

const TransactionGraph = () => {
  return (
    <TransactionGraphWrapper>
      <Row>
        <Col xs={24} sm={24} md={16} lg={15} style={{ paddingRight: '30px' }}>
          TransactionGraph
        </Col>
        <Col xs={24} sm={24} md={8} lg={9}>
            cry news
        </Col>
      </Row>
    </TransactionGraphWrapper>
  );
};

export default TransactionGraph;
