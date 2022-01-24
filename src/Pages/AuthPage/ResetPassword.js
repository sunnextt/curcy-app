import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';
import { showErrMsg, showSuccessMsg } from '../../utilities/notfication/nofication';
import { isEmpty, isLength, isMatch } from '../../utilities/validation';

import { clearMessage } from '../../redux/slice/MessageSlice';
import { resetpassword } from '../../redux/slice/AuthSlice';

const initialState = {
  password: '',
  password_confirmation: '',
  err: '',
  success: '',
};

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [successReset, setSuccessReset] = useState(false);

  const { message } = useSelector(state => state.message);

  const [user, setUser] = useState(initialState);

  const { password, password_confirmation, err,  } = user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  const handleReset = async e => {
    e.preventDefault();

    if (isEmpty(password)) {
      setUser({ ...user, err: 'Please fill in all fields.', success: '' });
    } else if (isLength(password)) {
      setUser({ ...user, err: 'Password must be at least 6 characters.', success: '' });
    } else if (!isMatch(password, password_confirmation)) {
      setUser({ ...user, err: 'Password did not match.', success: '' });
    } else {
      setLoading(true);

      dispatch(resetpassword({ password, password_confirmation }))
        .unwrap()
        .then(() => {
          setSuccessReset(true);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  console.log(message);

  if (successReset) {
    return (
      <div className="signup_header">
        <h2>Password Reset</h2>
        <h6>
          Sweet! Your new password has now been set. <a href="/login">Go to account</a>
        </h6>
      </div>
    );
  }

  return (
    <Container>
      <div className="signup_header">
        <Row align="middle" justify="center">
          <Col>
            <h2 style={{ margin: '0' }}>Reset Password</h2>
          </Col>
        </Row>
      </div>
      <FormSignUpDiv>
        <Row align="middle" justify="center">
          <Col span={12} xs={22} sm={22} md={22} lg={24}>
            {err && showErrMsg(err)}
            {message && showSuccessMsg(message)}
            <Form onSubmit={handleReset}>
              <Row gutter={24}>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>New password</InputLabel>
                  <Input name="password" type="password" placeholder="Enter Email" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Repeat new password</InputLabel>
                  <Input
                    name="password_confirmation"
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChangeInput}
                  />
                </Col>
              </Row>
              <div className="signup_button">
                <Row align="middle" justify="center">
                  <Col>
                    <Button type="submit">Reset Password</Button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                      {loading && <Spin />}
                    </div>
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

export default ResetPasswordPage;
