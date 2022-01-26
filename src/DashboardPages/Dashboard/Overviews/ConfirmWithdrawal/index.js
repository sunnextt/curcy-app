import { Form, Input, Modal, Select } from 'antd';
import Button from '../../../../components/styledButton';
import React from 'react';
import { showErrMsg } from 'utilities/notfication/nofication';

import ModalContent from './styled';
import { useSelector } from 'react-redux';

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const ConfirmWithwalModal = ({
  error,
  handleCancel,
  isModalVisible,
  handleOk,
  handleSubmit,
  handleChangeInput,
  handleChange,
}) => {
  const { banks: bankLists } = useSelector(state => state.banks);

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
              <Input placeholder="Account Name" type="text" name="account_name" onChange={handleChangeInput} />
            </div>
            <div className="margin">
              <Select
                size="large"
                showSearch
                onChange={handleChange}
                style={{ width: '100%' }}
                placeholder="Bank Name"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                {bankLists ? (
                  bankLists.map(({ code, name }) => (
                    <Option key={code} value={name}>
                      {name}
                    </Option>
                  ))
                ) : (
                  <div className="margin">
                    <Input placeholder="Bank Name" name="bank_name" type="text" onChange={handleChangeInput} />
                  </div>
                )}
              </Select>
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
