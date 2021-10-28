import Row from 'components/Row';
import { Col } from '../sectionHero/styled';
import HeroImg from 'assets/png/hero2.png';

const About = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <h1>About Currenxi.ng</h1>
        <p>
          Currenxi.ng is a highly secured platform where you trade digital assets such as gift cards, cryptocurrencies,
          and NFTs without any difficulty. Whether it is Bitcoin, Ethereum, Litecoin, or USDT, we will pay you fast in
          your bank account or cryptocurrency.
        </p>
        <p>We are registered by the regulatory authotities, and also adopt industry’s best practices.</p>
      </Col>
      <Col flex xs={24} sm={24} md={12}>
        <img src={HeroImg} alt="" className="hero" />
      </Col>
    </Row>
  );
};

export default About;
