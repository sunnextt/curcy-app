import React from 'react';
import ReferRewardWrapper, { Button, Card } from './styled';
import handok from '../../../../assets/dashboard/handok.png';
import { BsArrowRight } from 'react-icons/bs';


const ReferReward = () => {
  return (
    <ReferRewardWrapper>
      <Card style={{ width: '100%', background: '#001950', borderRadius: '16px' }}>
        <div className="card_contents">
          <div className="btn_div">
            <div>
              <h6>Refer Rewards</h6>
              <h4>Earn ₦500 rewards on every successfull refers</h4>
            </div>
            <div>
              <Button href="" type="primary" shape="round" size="large">
                Learn More &nbsp;&nbsp; <BsArrowRight size="29" style={{paddingTop: "10px"}} />
              </Button>
            </div>
          </div>
          <img src={handok} alt="hand-ok" width="25%" />
        </div>
      </Card>
    </ReferRewardWrapper>
  );
};

export default ReferReward;
