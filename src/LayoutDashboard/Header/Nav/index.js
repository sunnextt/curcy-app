import { Col } from 'antd';
import React from 'react';
import { Li, Link, NavWrap, Row, Ul } from './styled';

const Nav = () => {
  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={22} md={2} lg={16}>
        <NavWrap>
          <Ul>
            <Li>
              <Link to="/dashboard">Dashboard</Link>
            </Li>
            <Li>
              <Link to="/sellcoinds">Sell Coins</Link>
            </Li>
            <Li>
              <Link to="/trades">Trades</Link>
            </Li>
            <Li>
              <Link to="/transactions">Transactions</Link>
            </Li>
            <Li>
              <Link to="/withdraw">Withdraw</Link>
            </Li>
            <Li>
              <Link to="/Ppofile">Profile</Link>
            </Li>
          </Ul>
        </NavWrap>
      </Col>
    </Row>
  );
};

export default Nav;
