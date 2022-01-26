import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Notification from './Notification';
import BankAccount from './BankAccount';
import ParsonalData from './PersonalData';
import ProfilePageWrap, { Title } from './styled';
import { updateUser } from 'redux/slice/userDataSlice';
import { ToastContainer, toast } from 'react-toastify';
// import { isEmail, isEmpty } from 'utilities/validation';
import { useDispatch, useSelector } from 'react-redux';

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
  const { user: currentUser } = useSelector(state => state.auth);
  const { message: UpdateMessage } = useSelector(state => state.update);

  const notify = () =>
    // eslint-disable-next-line no-template-curly-in-string
    toast.success(UpdateMessage, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [successUpdate, setSuccessUpdate] = useState(false);
  const [bank_name, setBank_name] = useState();
  const { data } = currentUser;

  const [profile, setProfile] = useState({
    first_name: data ? data.first_name : '',
    last_name: data ? data.last_name : '',
    email: data ? data.email : '',
    phone: data ? data.phone : '',
    kyc_verified: data ? data.kyc_verified : '',
    bank_name: data ? data.bank_name : '',
    account_number: data ? data.bank_account_number : '',
    bank_account_name: data ? data.bank_account_name : '',
  });

  const { first_name, last_name, email, phone, kyc_verified, account_number, bank_account_name } = profile;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleChange = e => {
    setBank_name(e.label);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(
      updateUser({
        first_name,
        last_name,
        email,
        phone,
        kyc_verified,
        bank_name,
        account_number,
        bank_account_name,
      }),
    )
      .unwrap()
      .then(res => {
        setSuccessUpdate(true);
        notify();
      })
      .catch(() => {
        setSuccessUpdate('success error');
      });
  };

  return (
    <ProfilePageWrap>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <ParsonalData profileData={data} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit} />
        </TabPanel>
        <TabPanel>
          <BankAccount
            profileData={data}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </TabPanel>
        <TabPanel>
          <Notification />
        </TabPanel>
      </Tabs>
    </ProfilePageWrap>
  );
};

export default ProfilePage;
