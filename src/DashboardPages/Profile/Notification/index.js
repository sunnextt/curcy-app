import React, { useState } from 'react';
import NotificationWrapper from './styled';
import notifyLogo from '../../../assets/dashboard/notifysvg.svg';
import Switch from 'react-switch';

const Notification = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleSwitch = nextChecked => {
    setChecked(nextChecked);
  };
  const handleSwitch2 = nextChecked => {
    setChecked2(nextChecked);
  };
  const handleSwitch3 = nextChecked => {
    setChecked3(nextChecked);
  };
  return (
    <NotificationWrapper>
      <div className="notification_contents">
        <div className="flex_row">
          <img src={notifyLogo} alt="notification icon" width="24px" />
          <div className="notification_text_content">
            <h5>Sales Resumption </h5>
            <h6>Notify me by email about resumption of sales</h6>
          </div>
        </div>
        <Switch
          onChange={handleSwitch}
          onColor="#002F71"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          onHandleColor="#ffffff"
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked}
        />
      </div>
      <div className="notification_contents">
        <div className="flex_row">
          <img src={notifyLogo} alt="notification icon" width="24px" />
          <div className="notification_text_content">
            <h5>Latest News</h5>
            <h6>Notify me by email for latest news</h6>
          </div>
        </div>
        <Switch
          onChange={handleSwitch2}
          onColor="#002F71"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          onHandleColor="#ffffff"
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked2}
        />
      </div>
      <div className="notification_contents">
        <div className="flex_row">
          <img src={notifyLogo} alt="notification icon" width="24px" />
          <div className="notification_text_content">
            <h5>Unusual Activity</h5>
            <h6>Alert me by email for unusual activity.</h6>
          </div>
        </div>
        <Switch
          onChange={handleSwitch3}
          onColor="#002F71"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          onHandleColor="#ffffff"
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked3}
        />
      </div>
    </NotificationWrapper>
  );
};

export default Notification;
