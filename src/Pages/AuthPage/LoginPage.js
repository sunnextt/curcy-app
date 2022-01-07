// import { useDispatch } from 'react-redux';
// import { dispatchLogin } from '../../../redux/actions/authAction';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container, { Button, Form, Input, InputLabel, FormSignUpDiv } from './styled';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../../utilities/notfication/nofication';
import { isEmpty, isEmail, isLength } from '../../utilities/validation';

const initialState = {
  email: '',
  password: '',
  err: '',
  success: '',
};

const LoginPage = () => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const { email, password, err, success } = user;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setUser({ ...user, err: 'Please fill in all fields.', success: '' });
    } else if (!isEmail(email)) {
      setUser({ ...user, err: 'Invalid emails.', success: '' });
    } else if (isLength(password)) {
      setUser({ ...user, err: 'Password must be at least 6 characters.', success: '' });
    } else {
      try {
        const res = await axios.post('/user/login', { email, password });
        setUser({ ...user, err: '', success: res.data.msg });

        localStorage.setItem('firstLogin', true);

        // dispatch(dispatchLogin());
        navigate('/admin');
      } catch (err) {
        console.log('error');
        err && setUser({ ...user, err: 'username or password is incorrect', success: '' });
        navigate('/admin');
      }
    }
  };

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
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <Form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Email</InputLabel>
                  <Input name="email" placeholder="Enter Email" onChange={handleChangeInput} />
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <InputLabel>Password</InputLabel>
                  <Input name="password" type="password" placeholder="Enter Password" onChange={handleChangeInput} />
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
                    <Button type="submit">Sign In</Button>
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
