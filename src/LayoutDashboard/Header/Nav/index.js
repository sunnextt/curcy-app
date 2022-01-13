import { Col } from 'antd';
import React from 'react';
import { generatePath } from 'react-router-dom';
import { Li, Link, NavWrap, Row, Ul } from './styled';

const Nav = props => {
  let path = generatePath('/admin');

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={24} lg={20}>
        <NavWrap>
          <Ul {...props}>
            <Li {...props}>
              <Link {...props} to={`${path}`}>
                Dashboard
              </Link>
            </Li>
            <Li {...props}>
              <Link {...props} to={`${path}/sellcoins`}>
                Sell Coins
              </Link>
            </Li>
            <Li {...props}>
              <Link {...props} to={`${path}/trades`}>
                Trades
              </Link>
            </Li>
            <Li {...props}>
              <Link {...props} to={`${path}/transactions`}>
                Transactions
              </Link>
            </Li>
            <Li {...props}>
              <Link {...props} to={`${path}/withdraws`}>
                withdrawals
              </Link>
            </Li>
            <Li {...props}>
              <Link {...props} to={`${path}/profile`}>
                Profile
              </Link>
            </Li>
          </Ul>
        </NavWrap>
      </Col>
    </Row>
  );
};

export default Nav;
