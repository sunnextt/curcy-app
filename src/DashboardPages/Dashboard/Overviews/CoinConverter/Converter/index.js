import React from 'react';
import ConverterWrap from './styled';
import { FaEquals } from 'react-icons/fa';
import { Col, Row } from 'antd';

const converterOutput = '₦ 3,000.00';
const CoinConverter = () => {
  return (
    <ConverterWrap>
      <Row className="converter_input">
        <Col span={15}>
          <select defaultValue="3000">
            <option value="3000">USD BTC</option>
            <option value="500">Naira USD</option>
          </select>
          <input defaultValue="3000" />
        </Col>
        <Col span={2}>
          <h6 className="equal_to">
            <FaEquals size="20" />
          </h6>
        </Col>
        <Col span={7}>
          <div className="converter_output">
            <h6>{converterOutput}</h6>
          </div>
        </Col>
      </Row>
    </ConverterWrap>
  );
};

export default CoinConverter;
