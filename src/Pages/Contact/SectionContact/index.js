import Col from 'components/Col'
import Row from 'components/Row'
import React from 'react'
import { Button, ContactDiv, Form, Input, InputLabel, TextField, InputItem, ContactSection} from './styled'

const ContactUs = () => {
    return (
        <ContactSection>
            <Row>
                <Col span={15} xs ={24} sm={24} md={15}>
                    <ContactDiv>
                        <h4>Contact Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </ContactDiv>
                </Col>
                <Col span={15} xs ={24} sm={24} md={15}>
                    <Form>
                        <InputItem>
                            <div style={{flex: "1 1 auto"}}>
                                <InputLabel>Full Name</InputLabel>
                                <Input name="fullName" placeholder="Your Full Name"/>
                            </div>
                            <div style={{flex: "1 1 auto"}}>
                                <InputLabel>Email</InputLabel>
                                <Input  name="email" placeholder="Email"/>
                            </div>
                        </InputItem>
                        <div style={{marginBottom: '1rem'}}>
                            <InputLabel>Message</InputLabel>
                            <TextField rows="8" name="email" placeholder="Write here ..."/>
                        </div>
                        <div>
                           <Button>Send Message</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </ContactSection>
    )
}

export default ContactUs
