import React from 'react'
import { Button, HelpText, Div, Main, Col } from './styled'
import EnvelopeImg from 'assets/png/envelope.png';
import { InputWrapper } from 'components/Input/styled';
import { Form, Row } from 'antd';

const NewsLetter = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


    return (
      < Div>
          <Row>
            <Col span={6} xs={24} sm={9} md={9} lg={9}>
              <div style={{textAlign: 'center', padding: '1rem'}}>
                 <img src={EnvelopeImg} alt="envelope" width="60%" margin="2rem"/>
                </div>
             </Col>
            <Col span={20} xs ={24} sm={15} md={15} lg={15}>
              <div>
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
             
              </div>
            </Col>
          </Row>
        </Div>
    )
}

export default NewsLetter
