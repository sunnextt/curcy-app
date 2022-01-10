import React from 'react';
import NotificationWrapper from './styled';
import notifyLogo from '../../../assets/dashboard/notifysvg.svg';

const Notification = () => {
  return (
    <NotificationWrapper>
      <div className="notification_contents">
        <img src={notifyLogo} alt="notification icon" width="24px" />
        <div className="notification_text_content">
          <h5>Sales Resumption </h5>
          <h6>Notify me by email about resumption of sales</h6>
        </div>
        <span>switch</span>
      </div>
      <div className="notification_contents">
        <img src={notifyLogo} alt="notification icon" width="24px" />
        <div className="notification_text_content">
          <h5>Latest News</h5>
          <h6>Notify me by email for latest news</h6>
        </div>
        <span>switch</span>
      </div>
      <div className="notification_contents">
        <img src={notifyLogo} alt="notification icon" width="24px" />
        <div className="notification_text_content">
          <h5>Unusual Activity</h5>
          <h6>Alert me by email for unusual activity.</h6>
        </div>
        <span>switch</span>
      </div>
    </NotificationWrapper>
  );
};

export default Notification;
