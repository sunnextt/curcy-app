import { Col, Row } from 'antd';
import React from 'react';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';

const ForgotPasswordPage = () => {
  return (
    <Container>
      <div className="signup_header">
        <Row align="middle" justify="center">
          <Col>
            <h2>Forgot Password</h2>
            <h6>Enter email address linked to your account to reset password</h6>
          </Col>
        </Row>
      </div>
      <FormSignUpDiv>
        <Form>
          <Row align="middle" justify="center">
            <Col xs={23} sm={16} md={16} lg={20}>
              <InputLabel>Email</InputLabel>
              <Input name="fullName" placeholder="Enter Email" />
            </Col>
          </Row>
          <div className="signup_button">
            <Row align="middle" justify="center">
              <Col>
                <Button>Reset Password</Button>
              </Col>
            </Row>
          </div>
        </Form>
      </FormSignUpDiv>
    </Container>
  );
};

export default ForgotPasswordPage;
