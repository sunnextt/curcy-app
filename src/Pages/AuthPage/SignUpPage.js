import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';
import { showErrMsg, showSuccessMsg } from '../../utilities/notfication/nofication';
import { isEmpty, isEmail, isLength, isMatch, validatePhoneNumber } from '../../utilities/validation';

import { register } from '../../redux/slice/AuthSlice';
import { clearMessage } from '../../redux/slice/MessageSlice';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
  err: '',
  success: '',
};

const SignUpPage = () => {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  // const { message } = useSelector(state => state.message);

  const { first_name, last_name, phone_number, password, email, password_confirmation, err, success } = user;
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  console.log(user);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isEmpty(first_name) || isEmpty(last_name) || isEmpty(password) || isEmpty(phone_number))
      return setUser({ ...user, err: 'Please fill in all fields.', success: '' });

    if (!isEmail(email)) return setUser({ ...user, err: 'Invalid emails.', success: '' });

    if (!validatePhoneNumber(phone_number))
      return setUser({ ...user, err: 'Please enter a valid phone number.', success: '' });

    if (isLength(password)) return setUser({ ...user, err: 'Password must be at least 6 characters.', success: '' });

    if (!isMatch(password, password_confirmation))
      return setUser({ ...user, err: 'Password did not match.', success: '' });

    setLoading(true);

    dispatch(register({ email, password, first_name, last_name, phone_number, password_confirmation }))
      .unwrap()
      .then(res => {
        setSuccessful(true);
        Navigate('/admin');
        window.location.reload();
        setUser({ ...user, err: '', success: res.data.msg });
      })
      .catch(err => {
        setSuccessful(false);
        setLoading(false);
        err.response && setUser({ ...user, err: err.response, success: '' });
      });
  };

  if (successful) {
    return <navigate to="/admin" />;
  }

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
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <Form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col xs={12} sm={12} md={12}>
                  <InputLabel>First Name</InputLabel>
                  <Input name="first_name" placeholder="Enter First Name" onChange={handleChangeInput} />
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <InputLabel>Last Name</InputLabel>
                  <Input name="last_name" placeholder="Enter Last Name" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Email</InputLabel>
                  <Input name="email" placeholder="Enter Email" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Phone Number</InputLabel>
                  <Input type="tel" name="phone_number" placeholder="Enter Phone number" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Password</InputLabel>
                  <Input name="password" type="password" placeholder="Enter Password" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel> Comfirm Password</InputLabel>
                  <Input
                    name="password_confirmation"
                    type="password"
                    placeholder="Enter Comfirm Password"
                    onChange={handleChangeInput}
                  />
                </Col>
              </Row>
              <div className="signup_button">
                <Row align="middle" justify="center">
                  <Col>
                    <Button>Register</Button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {loading && <Spin />}
                    </div>
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
