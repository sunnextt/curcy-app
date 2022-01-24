import { Col, Row, Spin } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotpassword } from 'redux/slice/AuthSlice';
import { showErrMsg, showSuccessMsg } from 'utilities/notfication/nofication';
import { isEmail, isEmpty } from 'utilities/validation';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const HandleClick = e => {
    e.preventDefault();
    if (isEmpty(email)) {
      setError('Please fill the form field.');
    } else if (!isEmail(email)) {
      setError('Invalid emails.');
    } else {
      setLoading(true);

      dispatch(forgotpassword({ email }))
        .unwrap()
        .then(() => {
          setSuccess(true);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  if (success) {
    return (
      <div className="signup_header">
        <h2>Password Reset</h2>
        <h6>Password Reset A message has been sent to you by email with instructions on how to reset your password.</h6>
      </div>
    );
  }

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
              {error && showErrMsg(error)}
              {message && showSuccessMsg(message)}
              <InputLabel>Email</InputLabel>
              <Input name="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
            </Col>
          </Row>
          <div className="signup_button">
            <Row align="middle" justify="center">
              <Col>
                <Button onClick={HandleClick}>Reset Password</Button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                  {loading && <Spin />}
                </div>
              </Col>
            </Row>
          </div>
        </Form>
      </FormSignUpDiv>
    </Container>
  );
};

export default ForgotPasswordPage;
