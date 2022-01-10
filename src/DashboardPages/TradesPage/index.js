import React from 'react';
import Container, { HeaderContent, Input, Title } from './styled';
import Vectorlogo from '../../assets/dashboard/downVector.svg';
import Hambugerlogo from '../../assets/dashboard/hambugerLogo.svg';
import synclogo from '../../assets/dashboard/sync_logo.svg';
import Button from 'components/Buttons';
import HistoryTable from '../Dashboard/Overviews/TradeHistory/HistoryTable'

const TradeHistory = () => {
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
      <HistoryTable BGcolor="#F6F9FF" />
    </Container>
  );
};

export default TradeHistory;
