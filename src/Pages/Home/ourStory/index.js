import Col from 'components/Col';
import { Row } from './styled';
import { Col as ColImg } from '../sectionHero/styled';
import HeroImg from 'assets/png/hero3.png';

const Story = () => {
  return (
    <Row>
      <ColImg flex xs={24} sm={24} md={12}>
        <img src={HeroImg} alt="" className="hero" />
      </ColImg>
      <Col xs={24} sm={24} md={12}>
        <h1>Our Story</h1>
        <p>
          Our work with block chain is one of the inspirations for founding currenxi.ng. We know what crypto can power,
          so we decide to create a platform that unleashes the power of block chain.
        </p>
        <p>We are working to ensure that our users do more and get mouthwatering profits on any deal.</p>
      </Col>
    </Row>
  );
};

export default Story;
