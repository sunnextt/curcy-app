import { useState } from 'react';
import { Drawer } from 'antd';
import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';
import { CgMenuRight } from 'react-icons/cg';
import { colors } from 'theme';

const buttonStyle = {
  display: 'block',
  margin: '1rem 0',
};

const Header = props => {
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <HeaderContext>
        <img src="/logo.png" className="logo" alt="" />
        {window.innerWidth > 756 ? (
          <>
            <Nav />
            <div className="button-group">
              <Button type="ghost" color="primary" _backgroundColor="primary">
                Sign In
              </Button>
              <Button>Get Started</Button>
            </div>
          </>
        ) : (
          <CgMenuRight size={20} color={colors.blue[100]} className="menu-icon" onClick={onOpen} />
        )}
      </HeaderContext>
      <Drawer placement="right" closable onClose={onClose} visible={visible}>
        <Nav orientation="mobile" />
        <Button type="ghost" color="primary" _backgroundColor="primary" style={{ ...buttonStyle }}>
          Sign In
        </Button>
        <Button style={{ ...buttonStyle }}>Get Started</Button>
      </Drawer>
    </>
  );
};

export default Header;
