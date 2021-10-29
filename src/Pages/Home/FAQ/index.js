import { Row, CardQuestion, CardAnswer } from './styled';
import Col from 'components/Col';
import Card from 'components/Card';

const FAQ = () => {
  return (
    <Row>
      <h1>Frequently Asked Questions</h1>

      <Col span={24} md={8} flex style={{ justifyContent: 'flex-start' }}>
        <CardQuestion>Why should I trust Currenxi.ng?</CardQuestion>
        <CardQuestion>2. How do I register an account?</CardQuestion>
        <CardQuestion>3. What can I trade on Currenxi.ng?</CardQuestion>
        <CardQuestion>4. What are your working hours</CardQuestion>
      </Col>
      <Col span={24} md={16}>
        <CardAnswer>
          <p>
            Currenxi.ng is more than a website where you can exchange gift cards and cryptocurrencies. In our short time
            of inception, we have managed to change the game of crypto trading with our automated exchange system.
          </p>
          <p>
            Our minimum sell limit is $1. This gives you the chance to try out our system and see how fast we will
            process your payment. When we say fast, we do not mean hours or minutes, but seconds. It is unbelievable,
            right? This is why you should take action and get the best trading experience with us.
          </p>
        </CardAnswer>
      </Col>
    </Row>
  );
};

export default FAQ;
