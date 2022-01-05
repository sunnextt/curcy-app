import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';

const LoginPage = () => {
  return (
    <Container>
      <div className="signup_header">
        <Row align="middle" justify="center">
          <Col>
            <h2>Sign In</h2>
            <h6>Log in to access your Currenxi dashbaord</h6>
          </Col>
        </Row>
      </div>
      <FormSignUpDiv>
        <Row align="middle" justify="center">
          <Col span={12} xs={22} sm={22} md={22} lg={24}>
            <Form>
              <Row gutter={24}>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Email</InputLabel>
                  <Input name="fullName" placeholder="Enter Email" />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Password</InputLabel>
                  <Input name="fullName" placeholder="Enter Password" />
                </Col>
              </Row>
              <div className="forgotpassword_link">
                <h6>
                  <Link to="/forgotpassword">Forgot password?</Link>
                </h6>
              </div>
              <div className="signup_button">
                <Row align="middle" justify="center">
                  <Col>
                    <Button>Sign In</Button>
                  </Col>
                </Row>
              </div>
              <div className="already_register_link">
                <Row align="middle" justify="center">
                  <Col>
                    <p>
                      Already have an account?<Link to="/signup"> Sign Up</Link>
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


export default LoginPage;
