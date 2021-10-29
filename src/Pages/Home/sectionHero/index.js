import { Background, BackgroundChild, Col } from './styled';
import HeroImg from 'assets/png/hero.png';
import Button from 'components/Buttons';
import Row from 'components/Row';

const Hero = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <h2>Welcome to Currenxi.ng</h2>
        <h1 className="hero-text--large">Buying & Selling Digital Assets Made Easy</h1>
        <Button color="secondary" backgroundcolor="primary">
          Get Started
        </Button>
      </Col>
      <Col flex xs={24} sm={24} md={12}>
        <img src={HeroImg} alt="" className="hero" />
      </Col>
      <Background />
      <BackgroundChild />
    </Row>
  );
};

export default Hero;
