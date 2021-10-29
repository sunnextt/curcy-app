import Col from 'components/Col';
import { Row, CardLeft, CardRight } from './styled';
import HeroImg from 'assets/png/hero4.png';

const getStarted = () => {
  return (
    <Row>
      <Col span={24} md={12}>
        <CardLeft>
          <h2>Get Started Today</h2>
          <p>
            It is high time you started trading without any restriction whatsoever. If you want to experience trading
            without complexity, then you should go for currenxi.ng.{' '}
          </p>
          <p>
            We have made the user experience, accessibility, and navigation of the website as simple as possible. That
            is, you don't need any technical skills before you can get the best trading experience. This simplicity is
            extended to registration. You can easily sign up and create a new account on the website.
          </p>
          <img src={HeroImg} alt="bitcoin" />
        </CardLeft>
      </Col>
      <Col flex span={24} md={12} style={{ justifyContent: 'space-between' }}>
        <CardRight>
          <h5>
            <span>1.</span> Create Account
          </h5>
          <p>
            To carry out any transaction on currenxi.ng, you need to create an account. Creating an account is easy.
            Follow this link to create an account.
          </p>
        </CardRight>
        <CardRight>
          <h5>
            <span>2.</span> Start Trading
          </h5>
          <p>
            You can start trading the moment you sign in to currenxi.ng. Choose whatever you want to trade. Whether you
            want to buy cryptocurrency or sell gift cards, the process is easy to follow.
          </p>
        </CardRight>
        <CardRight>
          <h5>
            <span>3.</span> Complete Transaction
          </h5>
          <p>
            Once you have put up a trade, you will have to confirm the transaction to complete the process. For
            instance, if you sell on the website, the amount will be paid into your wallet – crypto or bank account
            within seconds. It is as fast as that.
          </p>
        </CardRight>
      </Col>
    </Row>
  );
};

export default getStarted;
