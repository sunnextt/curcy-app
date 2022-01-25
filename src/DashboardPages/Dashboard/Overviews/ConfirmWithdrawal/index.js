import { Form, Input, Modal } from 'antd';
import Button from '../../../../components/styledButton';
import React from 'react';
import { showErrMsg } from 'utilities/notfication/nofication';

import ModalContent from './styled';

// eslint-disable-next-line react/prop-types
const ConfirmWithwalModal = ({ error, handleCancel, isModalVisible, handleOk, handleSubmit, handleChangeInput }) => {
  const footer = null;
  return (
    <Modal footer={footer} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="40%">
      <ModalContent>
        <Form>
          {error && showErrMsg(error)}
          <div className="amount_withdral_div">
            <h5>Enter Amount to Withdraw</h5>
          </div>
          <div className="margin">
            <div className="margin">
              <Input placeholder="Account Name" type="text" name="account_name" onChange={handleChangeInput} />
            </div>
            <div className="margin">
              <Input placeholder="Bank Name" name="bank_name" type="text" onChange={handleChangeInput} />
            </div>
            <div className="margin">
              <Input placeholder="Account Number" name="account_number" type="text" onChange={handleChangeInput} />
            </div>
            <div className="margin">
              <Input placeholder="Enter Amount" name="amount" type="text" onChange={handleChangeInput} />
            </div>
          </div>
          <div className="withdraw_button">
            <Button color="primary" width="fullWidth" onClick={handleSubmit}>
              Confirm Withdraw
            </Button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmWithwalModal;
