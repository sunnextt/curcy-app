import { Col, Drawer, Row } from 'antd';
import React, { useState } from 'react';
import AppLogoAndUserAvatar from './AppLogoAndUserAvatar';
import Nav from './Nav';
import HeaderContainer from './styled';
import { useMediaQuery } from 'usehooks-ts';

const Header = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <HeaderContainer>
      <Row>
        <Col span={24} style={{ background: '#ffffff' }}>
          <AppLogoAndUserAvatar matches={matches} onOpen={onOpen} />
        </Col>
        {matches ? (
          <Col span={24} style={{ background: '#001950' }}>
            <Nav color="#ffffff" />
          </Col>
        ) : null}
      </Row>
      <Drawer placement="right" closable onClose={onClose} visible={visible}>
        <Nav orientation="mobile" color="#001950"/>
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
