import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';
import { showErrMsg, showSuccessMsg } from '../../utilities/notfication/nofication';
import { isEmpty, isEmail, isLength, isMatch } from '../../utilities/validation';

const initialState = {
  fName: '',
  lName: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: '',
};

const SignUpPage = () => {
  const [user, setUser] = useState(initialState);

  const { fName, lName, password, email, cf_password, err, success } = user;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isEmpty(fName) || isEmpty(lName) || isEmpty(password))
      return setUser({ ...user, err: 'Please fill in all fields.', success: '' });

    if (!isEmail(email)) return setUser({ ...user, err: 'Invalid emails.', success: '' });

    if (isLength(password)) return setUser({ ...user, err: 'Password must be at least 6 characters.', success: '' });

    if (!isMatch(password, cf_password)) return setUser({ ...user, err: 'Password did not match.', success: '' });

    try {
      const res = await axios.post('/user/register', {
        fName,
        lName,
        email,
        password,
      });

      setUser({ ...user, err: '', success: res.data.msg });
    } catch (err) {
      err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: '' });
    }
  };

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
                  <Input name="fName" placeholder="Enter First Name" onChange={handleChangeInput} />
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <InputLabel>Last Name</InputLabel>
                  <Input name="lName" placeholder="Enter Last Name" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Email</InputLabel>
                  <Input name="email" placeholder="Enter Email" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Password</InputLabel>
                  <Input name="password" placeholder="Enter Password" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel> Comfirm Password</InputLabel>
                  <Input name="cf_password" placeholder="Enter Comfirm Password" onChange={handleChangeInput} />
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
