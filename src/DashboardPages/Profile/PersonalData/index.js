import React from 'react'
import ParsonalDataWrapper, { Button, Form, Input, Label, VerticalBox } from './styled'

const ParsonalData = () => {
    return (
      <ParsonalDataWrapper>
        <Form>
          <VerticalBox>
            <Label>First Name</Label>
            <Input name="firstName" type="text" width="45%"/>
          </VerticalBox>
          <VerticalBox>
            <Label>Last Name</Label>
            <Input name="lastName" type="text" width="45%"/>
          </VerticalBox>
          <VerticalBox>
            <Label>Email</Label>
            <Input name="email" type="text" width="45%"/>
          </VerticalBox>
          <VerticalBox>
            <Label>KYC verified ?</Label>
            <Input name="kyc" type="text" width="45%"/>
          </VerticalBox>
          <Button>Save</Button>
        </Form>
      </ParsonalDataWrapper>
    );
}

export default ParsonalData
