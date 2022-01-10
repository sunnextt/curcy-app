import React from 'react';
import BankAccountWrapper, { Button, Input, Label, Option, Select, VerticalBox } from './styled';

const BankAccount = () => {
  return (
    <BankAccountWrapper>
      <VerticalBox>
        <Label>Bank Name</Label>
        <Select>
            <Option value="gtb">GT Bank</Option> 
        </Select>
      </VerticalBox>
      <VerticalBox>
        <Label>Account Number</Label>
        <Input name="accountNo" type="text"  width="45%"/>
      </VerticalBox>
      <VerticalBox>
        <Label>Account Name</Label>
        <Input name="accountName" type="text"  width="45%"/>
      </VerticalBox>
      <Button>Save</Button>
    </BankAccountWrapper>
  );
};

export default BankAccount;
