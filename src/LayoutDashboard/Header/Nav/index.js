import { Col } from 'antd';
import React from 'react';
import { generatePath } from 'react-router-dom';
import { Li, Link, NavWrap, Row, Ul } from './styled';

const Nav = () => {
  let path = generatePath('/admin');

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={22} md={22} lg={18}>
        <NavWrap>
          <Ul>
            <Li>
              <Link to={`${path}`}>Dashboard</Link>
            </Li>
            <Li>
              <Link to={`${path}/sellcoins`}>Sell Coins</Link>
            </Li>
            <Li>
              <Link to={`${path}/trades`}>Trades</Link>
            </Li>
            <Li>
              <Link to={`${path}/transactions`}>Transactions</Link>
            </Li>
            <Li>
              <Link to={`${path}/withdraws`}>withdraws</Link>
            </Li>
            <Li>
              <Link to={`${path}/profile`}>Profile</Link>
            </Li>
          </Ul>
        </NavWrap>
      </Col>
    </Row>
  );
};

export default Nav;
