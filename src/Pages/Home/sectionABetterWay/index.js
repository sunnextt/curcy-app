import Row from 'components/Row';
import Col from 'components/Col';
import { CardOuter, CardInner } from './styled';

const ABetterWay = () => {
  return (
    <Row>
      <Col>
        <CardOuter>
          <h1>A Better Way to Exchange Digital Assets</h1>
          <p>
            Currenxi.ng offers one of the simplest ways of exchanging your digital assets. A whole lot of scams and out
            there, and you wouldn't want to be a victim. This is another reason why you should work with us when you
            want to:
          </p>
          <Row style={{ padding: '3.5rem' }}>
            <Col span={24} md={12}>
              <CardInner>
                <h4>Exchange Gift Cards</h4>
                <p>
                  We buy a lot of gift cards from the USA and other countries. iTunes, Amazon, Steam, Walmart, Google,
                  Sephora, Nordstrom, Visa, Nike, Amex, eBay, Home Depot, OffGamers, Best Buy, Vanilla, Apple Store,
                  Target, and Marcy are other gift cards we buy.
                </p>
              </CardInner>
            </Col>
            <Col span={24} md={12}>
              <CardInner>
                <h4>Buy/Sell Cryptocurrencies</h4>
                <p>
                  You can buy or sell cryptocurrencies on Currenxi.ng. The cryptocurrencies are limited to Bitcoin,
                  Litecoin, Ethereum, and USDT.
                </p>
              </CardInner>
            </Col>
          </Row>
        </CardOuter>
      </Col>
    </Row>
  );
};

export default ABetterWay;
