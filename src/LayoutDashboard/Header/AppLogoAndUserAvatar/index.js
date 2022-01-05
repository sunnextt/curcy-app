import React from 'react';
import { Row } from './styled';
import Avatar from 'react-avatar';
import { BsBellFill } from 'react-icons/bs';

import DashboardLogo from '../../../assets/dashboard/CurrenxiLogo.png';

const username = 'Josh Osazuwa';

const AppLogoAndUserAvatar = () => {
  return (
    <Row>
      <img src={DashboardLogo} alt="Dashboard Logo" />
      <div className="avatar_div">
        <h6>
          {username}
          &nbsp; &nbsp;
          <span>
            <Avatar
              round
              className="user_avatar"
              name={username}
              size="50px"
              color="#C4C4C4"
              style={{ width: 'auto', height: 'auto' }}
            />
          </span>
        </h6>
        <BsBellFill size="36" color="white" className="bell_notification" />
      </div>
    </Row>
  );
};

export default AppLogoAndUserAvatar;
