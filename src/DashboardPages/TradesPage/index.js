import React, { useEffect, useState } from 'react';
import Container, { HeaderContent, Input, Title } from './styled';
import Vectorlogo from '../../assets/dashboard/downVector.svg';
import Hambugerlogo from '../../assets/dashboard/hambugerLogo.svg';
import synclogo from '../../assets/dashboard/sync_logo.svg';
import Button from 'components/Buttons';
import HistoryTable from '../Dashboard/Overviews/TradeHistory/HistoryTable';
import { useSelector } from 'react-redux';

const TradeHistory = () => {

  const { trade: UsertradeData } = useSelector(state => state.trade);

  const { data: tradeSourceData } = UsertradeData;

  const [tradeData, setTradeData] = useState('');

  useEffect(() => {

    if (tradeSourceData) {
      setTradeData(tradeSourceData);
    }
  }, [UsertradeData, tradeData, tradeSourceData]);

  return (
    <Container>
      <HeaderContent>
        <Title>Trade History</Title>
        <div className="search_refresh_div">
          <Button backgroundcolor="primary">
            <img src={synclogo} alt="sync logo" width="24px" />
          </Button>
          <Button backgroundcolor="primary">
            <img src={Hambugerlogo} alt="sync logo" width="24px" />
            <img src={Vectorlogo} alt="sync logo" width="8px" style={{ marginLeft: '10px' }} />
          </Button>
          <Input style={{ marginLeft: '10px' }} type="text" name="search" placeholder="Search" />
        </div>
      </HeaderContent>
      <HistoryTable tradeData={tradeData} BGcolor="#F6F9FF" size="10" />
    </Container>
  );
};

export default TradeHistory;
