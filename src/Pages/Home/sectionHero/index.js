import { HeroContext, Background, BackgroundChild, Col } from './styled';
import HeroImg from 'assets/png/hero.png';

const Hero = () => {
  return (
    <HeroContext>
      <Col md={12}>hero</Col>
      <Col md={12}>
        <img src={HeroImg} alt="" />
      </Col>
      <Background />
      <BackgroundChild />
    </HeroContext>
  );
};

export default Hero;
