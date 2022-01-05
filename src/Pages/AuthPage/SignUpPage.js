import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';

const SignUpPage = () => {
  return (
    <Container>
      <div className="signup_header">
        <Row align="middle" justify="center">
          <Col>
            <h2>Sign Up</h2>
            <h6>Log in to access your Currenxi dashbaord</h6>
          </Col>
        </Row>
      </div>
      <FormSignUpDiv>
        <Row align="middle" justify="center">
          <Col span={12} xs={22} sm={22} md={22} lg={12}>
            <Form>
              <Row gutter={24}>
                <Col xs={12} sm={12} md={12}>
                  <InputLabel>First Name</InputLabel>
                  <Input name="fullName" placeholder="Enter First Name" />
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <InputLabel>Last Name</InputLabel>
                  <Input name="fullName" placeholder="Enter Last Name" />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Email</InputLabel>
                  <Input name="fullName" placeholder="Enter Email" />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Password</InputLabel>
                  <Input name="fullName" placeholder="Enter Password" />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel> Comfirm Password</InputLabel>
                  <Input name="fullName" placeholder="Enter Comfirm Password" />
                </Col>
              </Row>
              <div className="signup_button">
                <Row align="middle" justify="center">
                  <Col>
                    <Button>Register</Button>
                  </Col>
                </Row>
              </div>
              <div className="already_register_link">
                <Row align="middle" justify="center">
                  <Col>
                    <p>
                      Already have an account?<Link to="/signin"> Sign In</Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>
      </FormSignUpDiv>
    </Container>
  );
};

export default SignUpPage;
