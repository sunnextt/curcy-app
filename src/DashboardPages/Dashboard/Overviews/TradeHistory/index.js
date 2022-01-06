import React from 'react';
import { Col, Row } from 'antd';
import TradeHistoryWrapper, { Card, Button } from './styled';
import HistoryTable from './HistoryTable';

const TradeHistory = () => {
  return (
    <TradeHistoryWrapper>
      <Row>
        <Col xs={24} sm={24} md={16} lg={15} style={{ paddingRight: '30px' }}>
          <Card style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_title">
              <h5>Trade History</h5>
              <Button type="link">view more </Button>
            </div>
            <div className="table_contents">
              <HistoryTable/>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={9}>
          <h1>coin converter</h1>
        </Col>
      </Row>
    </TradeHistoryWrapper>
  );
};

export default TradeHistory;
