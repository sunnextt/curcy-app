import { Row as Context } from './styled';
import Col from 'components/Col';
import Icon1 from 'assets/png/cardIcon1.png';
import Icon2 from 'assets/png/cardIcon2.png';
import Icon3 from 'assets/png/cardIcon3.png';
import Icon4 from 'assets/png/cardIcon4.png';
import Icon5 from 'assets/png/cardIcon5.png';
import { Card } from './card';

const colStyle = {
  padding: '0',
};

const WhyCurrenxi = () => {
  return (
    <Context>
      <h1>Why You Should Choose Currenxi.ng</h1>
      <Col xs={24} sm={24} md={12} style={{ ...colStyle }}>
        <Card icon={Icon1}>
          <h5>Multiple Payment Options</h5>
          <p>
            You can get paid in any payment method of your choice when you exchange your gift cards and cryptocurrencies
            with us. Whether in ETH, Bitcoin, Litecoin, or even your local bank account, Currenxi.ng got you covered.
            You can also buy cryptocurrencies on our website with your bank card. Payment is completed instantly
          </p>
        </Card>
        <Card icon={Icon2}>
          <h5>Industry Best Practices</h5>
          <p>
            Our operations follow FINTECH international standards. We keep track of our operations from time to time to
            ensure that we get rid of any unauthorized transactions.
          </p>
        </Card>
        <Card icon={Icon3}>
          <h5>You Can Build Your Trading Reputation</h5>
          <p>
            The Currenxi.ng is built in a way that allows you to have a strong reputation as you trade on the platform.
            The more you trade without issues, the more you get visible on the platform. One day, you might get featured
            on Currenxi.ng.
          </p>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} style={{ ...colStyle }}>
        <Card icon={Icon4}>
          <h5>Mouthwatering Rates and Top-Notch Security</h5>
          <p>
            At currenxi.ng, we offer you the most competitive rates you can't get anywhere else. When you trade your
            gift cards and crypto with us, we are ready to pay you at the top rates of the day. When it comes to
            security, your details and assets are safe. We employ the best industry-standard security to help keep our
            customers' information and transaction safe. You can never get it wrong when you work with us.
          </p>
        </Card>
        <Card icon={Icon5}>
          <h5>24/7 Support</h5>
          <p>
            At currenxi.ng, our team is always available to help whenever you are facing any difficulty. With
            round-the-clock and immediate assistance, we are ready to help you overcome any issue you might be facing.
            It doesn't matter if it is 2 AM or 7 PM. We're always available.
          </p>
        </Card>
      </Col>
    </Context>
  );
};

export default WhyCurrenxi;
