import React from 'react';
import WithdrawPageWrapper, { Button, FlexRow, Form, Input, Label, CNInput, VerticalBox } from './styled';
import infologo from '../../assets/dashboard/infologo.png';

const WithdrawPage = () => {
  return (
    <WithdrawPageWrapper>
      <Form>
        <FlexRow>
          <VerticalBox>
            <Label>Bank Name</Label>
            <Input type="text" name="bankName" width="90%" />
          </VerticalBox>
          <VerticalBox>
            <Label>Account Name</Label>
            <Input type="text" name="bankName" width="90%" />
          </VerticalBox>
        </FlexRow>
        <VerticalBox>
          <Label>Account Number</Label>
          <Input type="text" name="bankName" width="45%" />
        </VerticalBox>
        <VerticalBox>
          <Label>Account Balance</Label>
          <FlexRow>
            <div className="currency_name">
              <h6>NGN</h6>
            </div>
            <CNInput type="text" name="bankName" placeholder="203,000" />
          </FlexRow>
        </VerticalBox>
        <Button>Withdraw</Button>
        <div className="info_msg">
          <img src={infologo} alt="info icon" width="23px" height="23px" />
          <h6>
            Withdrawals that fail to go into your bank account instantly due to bank network issues will be credited
            into this wallet instead and then you can try to withdraw again, Please note! Withdrawals are processed
            within 5 - 60 minutes during business hours, all withdrawals made outside business hours will be paid on
            resumption of business for the day. Business hours are 8Am - 10PM.
          </h6>
        </div>
      </Form>
    </WithdrawPageWrapper>
  );
};

export default WithdrawPage;
