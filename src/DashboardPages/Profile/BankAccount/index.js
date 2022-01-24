import React from 'react';
import BankAccountWrapper, { Button, Form, Input, Label, VerticalBox } from './styled';

const BankAccount = ({ profileData, handleSubmit, handleChangeInput }) => {
  return (
    <BankAccountWrapper>
      <Form onSubmit={handleSubmit}>
        <VerticalBox>
          <Label>Bank Name</Label>
          <Input
            name="bank_name"
            defaultValue={profileData ? profileData.bank_name : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
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
