import React from 'react';
import BankAccountWrapper, { Button, Form, Input, Label, VerticalBox } from './styled';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

const { Option } = Select;


const BankAccount = ({ profileData, handleSubmit, handleChangeInput, handleChange }) => {
  const { banks: bankLists } = useSelector(state => state.banks);

  console.log(bankLists);

  return (
    <BankAccountWrapper width="45%">
      <Form onSubmit={handleSubmit}>
        <VerticalBox>
          <Label>Bank Name</Label>
          <Select
            size="large"
            showSearch
            onChange={handleChange}
            defaultValue={profileData ? profileData.bank_name : ''}
            className="form_select"
            placeholder={profileData ? profileData.bank_name : 'Bank Name'}
            optionFilterProp="children"
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {bankLists ? (
              bankLists.map(({ code, name }) => <Option key={code} value={code}>{name}</Option>)
            ) : (
              <div className="margin">
                <Input placeholder="Bank Name" name="bank_name" type="text" onChange={handleChangeInput} />
              </div>
            )}
          </Select>
        </VerticalBox>
        <VerticalBox>
          <Label>Account Number</Label>
          <Input
            name="bank_account_number"
            defaultValue={profileData ? profileData.bank_account_number : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>Account Name</Label>
          <Input
            name="bank_account_name"
            defaultValue={profileData ? profileData.bank_account_name : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <Button>Save</Button>
      </Form>
    </BankAccountWrapper>
  );
};

export default BankAccount;
