import { Form, Input, Modal } from 'antd';
import Button from '../../../../components/styledButton';
import React from 'react';
import { showErrMsg } from 'utilities/notfication/nofication';

import ModalContent from './styled';

// eslint-disable-next-line react/prop-types
const ConfirmWithwalModal = ({
  error,
  handleCancel,
  isModalVisible,
  handleOk,
  handleSubmit,
  handleChangeInput,
  first_name,
  last_name,
  bank_account_name,
  bank_account_number,
  bank_name,
}) => {
  const footer = null;
  return (
    <Modal footer={footer} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="50%">
      <ModalContent>
        <Form>
          {error && showErrMsg(error)}
          <div className="amount_withdral_div">
            <h5>Enter Amount to Withdraw</h5>
          </div>
          <div className="margin">
            <div className="margin">
              <Input
                name="account_name"
                value={bank_account_name ? `${first_name} ${last_name}` : ''}
                defaultValue={bank_account_name ? `${first_name} ${last_name}` : ''}
                placeholder={`${first_name} ${last_name} `}
                onChange={handleChangeInput}
              />
            </div>
            <div className="margin">
              <Input
                placeholder={bank_name}
                defaultValue={bank_name ? bank_name : ''}
                value={bank_name ? bank_name : ''}
                name="bank_name"
                type="text"
                onChange={handleChangeInput}
              />
            </div>
            <div className="margin">
              <Input
                name="account_number"
                placeholder={bank_account_number}
                value={bank_account_number ? bank_account_number : ''}
                defaultValue={bank_account_number ? bank_account_number : ''}
                type="text"
                onChange={handleChangeInput}
              />
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
