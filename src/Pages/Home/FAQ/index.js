import { Row, CardQuestion, CardAnswer } from './styled';
import Col from 'components/Col';
import { useState } from 'react';

const questions = [
  'Why should I trust Currenxi.ng?',
  'How do I register an account?',
  'What can I trade on Currenxi.ng?',
  'What are your working hours',
];

const answers = [
  <>
    <p>
      Currenxi.ng is more than a website where you can exchange gift cards and cryptocurrencies. In our short time of
      inception, we have managed to change the game of crypto trading with our automated exchange system.
    </p>
    <p>
      Our minimum sell limit is $1. This gives you the chance to try out our system and see how fast we will process
      your payment. When we say fast, we do not mean hours or minutes, but seconds. It is unbelievable, right? This is
      why you should take action and get the best trading experience with us.
    </p>
  </>,
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Eget sit amet tellus cras. Sed risus ultricies tristique nulla aliquet enim tortor at. Nulla
      pharetra diam sit amet nisl suscipit adipiscing bibendum. Massa vitae tortor condimentum lacinia quis vel eros.
      Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus.
    </p>
    <p>
      Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing tristique risus nec feugiat. Ipsum
      consequat nisl vel pretium lectus quam id. Dolor sit amet consectetur adipiscing elit ut aliquam purus.
    </p>
  </>,
  <>
    <p>
      Condimentum lacinia quis vel eros donec. Erat nam at lectus urna duis convallis. Maecenas sed enim ut sem viverra
      aliquet eget sit amet. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Diam
      sollicitudin tempor id eu nisl nunc mi ipsum. Et tortor at risus viverra adipiscing at in tellus. Aliquam eleifend
      mi in nulla. Lacus vestibulum sed arcu non odio. Magna sit amet purus gravida quis blandit turpis. Lacus viverra
      vitae congue eu consequat ac felis donec.
    </p>
    <p>
      Congue nisi vitae suscipit tellus mauris a. Felis bibendum ut tristique et egestas. Cras fermentum odio eu feugiat
      pretium nibh ipsum consequat. Risus nullam eget felis eget. Sollicitudin ac orci phasellus egestas tellus rutrum.
      Gravida rutrum quisque non tellus orci ac auctor augue mauris.
    </p>
  </>,
  <>
    <p>
      Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Nam aliquam sem et tortor consequat id porta
      nibh venenatis.Non odio euismod lacinia at quis risus sed vulputate. Volutpat ac tincidunt vitae semper quis
      lectus nulla at volutpat. Nec feugiat nisl pretium fusce id velit. Mattis enim ut tellus elementum sagittis vitae.
    </p>
    <p>
      Vitae auctor eu augue ut lectus arcu bibendum. Morbi enim nunc faucibus a. Convallis a cras semper auctor neque
      vitae tempus quam. Vel eros donec ac odio tempor orci dapibus ultrices in.
    </p>
  </>,
];

const FAQ = () => {
  const [active, setActive] = useState(0);
  return (
    <Row>
      <h1>Frequently Asked Questions</h1>

      <Col span={24} md={8} flex style={{ justifyContent: 'flex-start' }}>
        {questions.map((question, idx) => (
          <CardQuestion key={idx} active={active === idx} onClick={() => setActive(idx)}>
            {idx + 1}
            {'. '}
            {question}
          </CardQuestion>
        ))}
      </Col>
      <Col span={24} md={16}>
        <CardAnswer>{answers[active]}</CardAnswer>
      </Col>
    </Row>
  );
};

export default FAQ;
