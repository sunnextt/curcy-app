import React from 'react';
import { Col, Popover, Row } from 'antd';
import TransactionGraphWrapper, { Button, Card } from './styled';
import Graph from './TransactionGraph';
import AllCryptoNews from '../AllcryptoNews';
import { BsFillCaretDownFill } from 'react-icons/bs';

const content = (
  <div>
    <Button type="link" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
      7 Days
    </Button>
    <Button type="link" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
      14 Days
    </Button>
    <Button type="link" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
      1 Month
    </Button>
  </div>
);

const TransactionGraph = ({ matches }) => {
  return (
    <TransactionGraphWrapper>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
          <Card size="small" style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_title">
              <h5>Transaction Graph</h5>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="link">7 days </Button>
                <Popover placement="bottom" title="Filter By No Days" content={content} trigger="hover">
                  <a className="pop_over" href="##" type="link">
                    <BsFillCaretDownFill size="30" className="downfilled" />
                  </a>
                </Popover>
              </div>
            </div>
            <div className="table_contents">
              <Graph />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
          <AllCryptoNews />
        </Col>
      </Row>
    </TransactionGraphWrapper>
  );
};

export default TransactionGraph;
