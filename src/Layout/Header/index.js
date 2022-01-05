import { useState } from 'react';
import { Drawer } from 'antd';
import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';
import { CgMenuRight } from 'react-icons/cg';
import { colors } from 'theme';
import Logo from 'assets/png/logo.png';
import { Link } from 'react-router-dom';

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
        <img src={Logo} className="logo" alt="" />
        <Nav style={{ display: window.innerWidth <= 756 ? 'none' : 'inline-block' }} />
        <div className="button-group">
          <Button type="ghost" color="primary" backgroundcolor="primary">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button>
            <Link to="##">Get Started</Link>
          </Button>
        </div>
        <CgMenuRight
          size={20}
          color={colors.blue[100]}
          className="menu-icon"
          onClick={onOpen}
          style={{ display: window.innerWidth <= 756 ? 'block' : 'none' }}
        />
      </HeaderContext>
      <Drawer placement="right" closable onClose={onClose} visible={visible}>
        <Nav orientation="mobile" />
        <Button type="ghost" color="primary" backgroundcolor="primary" style={{ ...buttonStyle }}>
          <Link to="/login">Sign In</Link>
        </Button>
        <Button style={{ ...buttonStyle }}>Get Started</Button>
      </Drawer>
    </>
  );
};

export default Header;
