import React from 'react'
import NewsLetter from '../newsLetter';
import { FooterDiv} from './styled';
import Footer from '../Footer/index';



const FooterWrapper = () => {
    return (
      <FooterDiv >
            <NewsLetter/>
            <Footer />
      </FooterDiv>
    )
}



export default FooterWrapper
