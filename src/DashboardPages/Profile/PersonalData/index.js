import React from 'react';
import ParsonalDataWrapper, { Button, Form, Input, Label, VerticalBox } from './styled';

const ParsonalData = ({ profileData, handleSubmit, handleChangeInput }) => {
  return (
    <ParsonalDataWrapper>
      <Form onSubmit={handleSubmit}>
        <VerticalBox>
          <Label>First Name</Label>
          <Input
            name="first_name"
            defaultValue={profileData ? profileData.first_name : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>Last Name</Label>
          <Input
            name="last_name"
            defaultValue={profileData ? profileData.last_name : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>Email</Label>
          <Input
            name="email"
            defaultValue={profileData ? profileData.email : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>Phone Number</Label>
          <Input
            name="phone"
            defaultValue={profileData ? profileData.phone : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <VerticalBox>
          <Label>KYC verified ?</Label>
          <Input
            name="kyc_verified"
            defaultValue={profileData ? profileData.kyc_verified : ''}
            type="text"
            width="45%"
            onChange={handleChangeInput}
          />
        </VerticalBox>
        <Button>Save</Button>
      </Form>
    </ParsonalDataWrapper>
  );
};

export default ParsonalData;
