import React from 'react'
import { Nav, Ul, Li, FooterBottom , SocialIcon} from './styled';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import NewsLetter from '../newsLetter';
import { FooterDiv, Div } from './styled';



const Footer = () => {
    return (
      <FooterDiv >
            <NewsLetter/>
          <Div>
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
                <div style={{display: 'flex', flexDirection:"row", width: '100%'}}>
                  <p>@ 2021 Currenxi.ng. All rights reserved</p>
                <SocialIcon className="icon">
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <AiFillYoutube />
                </SocialIcon>
                </div>
              </FooterBottom>
          </Div>
      </FooterDiv>
    )
}

export default Footer
