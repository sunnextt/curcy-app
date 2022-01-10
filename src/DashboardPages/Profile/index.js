import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BankAccount from './BankAccount';
import Notification from './Notification';
import ParsonalData from './PersonalData';
import ProfilePageWrap, { Title } from './styled';

// Tabs === <div>
// Tablist === ul
// Tab === li
// TabPanel === <div>

const CustomTab = ({ children, selectedClassName, className, selected }) => (
  <Tab selectedClassName={selectedClassName} selected={selected}>
    <h4 className={className}>{children}</h4>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

const ProfilePage = () => {
  return (
    <ProfilePageWrap>
      <div>
        <Title>Profile</Title>
      </div>
      <Tabs className="tabs">
        <TabList className="tab_list">
          <CustomTab className="custom_typo" selected="selected">
            PERSONAL DATA
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            BANK ACCOUNT
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            NOTIFICATION
          </CustomTab>
        </TabList>
        <TabPanel className="tab_panel">
          <ParsonalData />
        </TabPanel>
        <TabPanel>
          <BankAccount />
        </TabPanel>
        <TabPanel>
          <Notification />
        </TabPanel>
      </Tabs>
    </ProfilePageWrap>
  );
};

export default ProfilePage;
