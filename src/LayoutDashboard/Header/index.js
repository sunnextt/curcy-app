import { Col, Row } from 'antd';
import React from 'react';
import AppLogoAndUserAvatar from './AppLogoAndUserAvatar';
import Nav from './Nav';
import HeaderContainer from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={24} style={{ background: '#ffffff' }}>
          <AppLogoAndUserAvatar />
        </Col>
        <Col span={24} style={{ background: '#001950' }}>
          <Nav />
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
