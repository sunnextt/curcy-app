import React, { useCallback, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { colors } from 'theme';
import { Popover, Button } from 'antd';

import { ContentDiv, Row } from './styled';
import Avatar from 'react-avatar';
// import { BsBellFill } from 'react-icons/bs';

import { logout } from 'redux/slice/AuthSlice';

import DashboardLogo from '../../../assets/dashboard/CurrenxiLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import EventBus from 'common/EventBus';
import { useNavigate } from 'react-router-dom';

const AppLogoAndUserAvatar = ({ matches, onOpen }) => {
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const logOut = useCallback(() => {
    dispatch(logout());
    Navigate('/login');
    window.location.reload();
  }, [Navigate, dispatch]);

  useEffect(() => {
    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);

  const { data } = currentUser || {};

  const username = `${data && data.first_name} ${data && data.last_name}`;

  const content = (
    <ContentDiv style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="content_username">
        <h6>{username}</h6>
      </div>
      <Button onClick={logOut}>Log out</Button>
    </ContentDiv>
  );

  return (
    <Row>
      <img src={DashboardLogo} alt="Dashboard Logo" />
      <div className="avatar_div">
        <h6>
          {username}
          &nbsp; &nbsp;
          <Popover content={content} placement="bottom" trigger="click">
            <span>
              <Avatar
                round
                className="user_avatar"
                name={username}
                size={matches ? 50 : 35}
                color="#C4C4C4"
                style={{ width: 'auto', height: 'auto' }}
              />
            </span>
          </Popover>
        </h6>
        {/* <BsBellFill size={matches ? 36 : 26} color="white" className="bell_notification" /> */}
        <CgMenuRight
          size={20}
          color={colors.blue[100]}
          className="menu-icon"
          onClick={onOpen}
          style={{ display: !matches ? 'block' : 'none' }}
        />
      </div>
    </Row>
  );
};

export default AppLogoAndUserAvatar;
