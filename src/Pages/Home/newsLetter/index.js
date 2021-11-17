import Col from 'components/Col';
import React from 'react'
import { Button, HelpText, Row } from './styled'
import EnvelopeImg from 'assets/png/envelope.png';
import { InputWrapper } from 'components/Input/styled';
import { Form } from 'antd';

const buttonStyle ={
}


const NewsLetter = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


    return (
        <Row>
            <Col span={9} xs={24} sm={24} md={9} lg={9}>
            <img src={EnvelopeImg} alt="envelope" />
            </Col>
            <Col span={15} xs ={24} sm={24} md={15} lg={15}>
            <h5>Stay Up to date</h5>
            <p>Sign up for our newsletters. Then you get regular news, bitcoin exchange rates and avaible gift cards etc.</p>
            <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item>
                 <InputWrapper placeholder="Your email address"/>
                <Button>
                    Subscribe Now
                </Button>
                </Form.Item>
            </Form>
            <HelpText style={{fontWeight: 300}}>Looking for help? <a href="/#" >Contact us here</a></HelpText>
            </Col>
        </Row>
    )
}

export default NewsLetter
