import { useCallback, useState } from 'react';
import { Drawer } from 'antd';
import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';
import { CgMenuRight } from 'react-icons/cg';
import { colors } from 'theme';
import Logo from 'assets/png/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/slice/AuthSlice';

const buttonStyle = {
  display: 'block',
  margin: '1rem 0',
};

const Header = props => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector(state => state.auth);

  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const logOut = useCallback(() => {
    dispatch(logout());
    Navigate('/login');
    window.location.reload();
  }, [Navigate, dispatch]);

  return (
    <>
      <HeaderContext>
        <img src={Logo} className="logo" alt="" />
        <Nav style={{ display: window.innerWidth <= 756 ? 'none' : 'inline-block' }} />
        <div className="button-group">
          <Button type="ghost" color="primary" backgroundcolor="primary">
            {!isLoggedIn ? (
              <Link to="/login">Sign In</Link>
            ) : (
              <Link to="/login" onClick={logOut}>
                Log out
              </Link>
            )}
          </Button>
          <Button>
            {isLoggedIn ? <Link to="/admin">GoTo Dashboard</Link> : <Link to="/signup">Get Started</Link>}
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
          <Link to="/login">
            {!isLoggedIn ? (
              <Link to="/login">Sign In</Link>
            ) : (
              <Link to="/login" onClick={logOut}>
                Log out
              </Link>
            )}
          </Link>
        </Button>
        <Button style={{ ...buttonStyle }}>
          {isLoggedIn ? <Link to="/admin">GoTo Dashboard</Link> : <Link to="/signup">Get Started</Link>}
        </Button>
      </Drawer>
    </>
  );
};

export default Header;
