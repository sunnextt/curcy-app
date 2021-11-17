import React from 'react'
import Col from 'components/Col';
import { Row, Nav, Ul, Li, FooterBottom , SocialIcon} from './styled';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import NewsLetter from '../newsLetter';
import { FooterDiv } from './styled';



const Footer = () => {
    return (
      <FooterDiv >
          <NewsLetter/>
          <Row>
          <Col span={24}>
            <Nav>
              <Ul>
                <Li>
                  Home
                </Li>
                <Li>
                  About US
                </Li>
                <Li>
                  FAQ
                </Li>
                <Li>
                  COntact Us
                </Li>
                <Li>
                  Privacy Policy
                </Li>
              </Ul>
            </Nav>
            <FooterBottom>
              <hr/>
              <div>
                <p>@ 2021 Currenxi.ng. All rights reserved</p>
              <SocialIcon className="icon">
                <AiFillInstagram />
                <AiFillTwitterSquare />
                <AiFillYoutube />
              </SocialIcon>
              </div>
            </FooterBottom>
          </Col>
        </Row>
      </FooterDiv>
    )
}

export default Footer
