import { HeroContext, Background, BackgroundChild, Col } from './styled';
import HeroImg from 'assets/png/hero.png';
import Button from 'components/Buttons';

const Hero = () => {
  return (
    <HeroContext>
      <Col xs={24} sm={24} md={12}>
        <h1>Welcome to Currenxi.ng</h1>
        <h1 className="hero-text--large">Buying & Selling Digital Assets Made Easy</h1>
        <Button color="secondary" _backgroundColor="primary">
          Get Started
        </Button>
      </Col>
      <Col flex xs={24} sm={24} md={12}>
        <img src={HeroImg} alt="" className="hero" />
      </Col>
      <Background />
      <BackgroundChild />
    </HeroContext>
  );
};

export default Hero;
