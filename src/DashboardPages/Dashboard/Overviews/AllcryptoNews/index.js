import React from 'react';
import AllCryptoNewsWrapper, { Button, Card } from './styled';
import Background from '../../../../assets/dashboard/newBg.png'
import { BsArrowRight } from 'react-icons/bs';


const AllCryptoNews = () => {
  return (
    <AllCryptoNewsWrapper>
      <Card
        style={{
          width: '100%',
          background: '#FCC700',
          borderRadius: '16px',
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="news_content_div">
          <div>
            <h3>All Crypto News Updates</h3>
            <h6>Read more about crypto informations who helps you manage, organize and control your assets safely</h6>
          </div>
          <div>
            <Button href="" type="primary" shape="round" size="large">
              Learn More &nbsp;&nbsp; <BsArrowRight size="29"/>
            </Button>
          </div>
        </div>
      </Card>
    </AllCryptoNewsWrapper>
  );
};

export default AllCryptoNews;
