import React, { useState } from 'react';
import ConverterWrap from './styled';
import { FaEquals } from 'react-icons/fa';
import { Col, Row } from 'antd';

const CoinConverter = () => {
  const [value, setValue] = useState(19000);
  const [inputValue, setInputValue] = useState("");

  const rate = (inputValue * value).toFixed(1);

  const converterOutput = rate;
  return (
    <ConverterWrap>
      <Row className="converter_input">
        <Col span={15}>
          <select value={value} onChange={e => setValue(e.target.value)}>
            <option value="19000">USD BTC</option>
            <option value="450">USD Naira</option>
          </select>
          <input defaultValue={value} value={inputValue} onChange={e => setInputValue(e.target.value)} />
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
