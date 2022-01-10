import React from 'react';
import Button from 'components/Buttons';
import { HeaderContent, Input, Title } from 'DashboardPages/TradesPage/styled';
import Vectorlogo from '../../assets/dashboard/downVector.svg';
import Hambugerlogo from '../../assets/dashboard/hambugerLogo.svg';
import synclogo from '../../assets/dashboard/sync_logo.svg';
import Container from './styled';
import HistoryTable from '../Dashboard/Overviews/TradeHistory/HistoryTable';


const TransactionsPage = () => {
  return (
    <Container>
      <HeaderContent>
        <Title>Transactions History</Title>
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

export default TransactionsPage;