import React, { useRef } from 'react';
import Ttable, { StatusDiv } from './styled';
import CustomTable from 'components/Table/constumTable';
import { TradeData } from 'utilities/mochData';

const columns = [
  {
    key: 'id',
    title: 'NAIRA',
    dataIndex: 'naira',

    sorter: (a, b) => a.naira.localeCompare(b.naira),
  },
  {
    key: 'id',
    title: 'USD',
    dataIndex: 'usd',
    sorter: (a, b) => a.usd.localeCompare(b.usd),
  },
  {
    key: 'id',
    title: 'DATE',
    dataIndex: 'date',
    sorter: (a, b) => a.date.localeCompare(b.date),
  },
  {
    key: 'id',
    title: 'STATUS',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_value, { status }) => (
      <div>
        {status === 'pending' && (
          <StatusDiv BGcolor="pending">
            <h6>Pending</h6>
          </StatusDiv>
        )}
        {status === 'success' && (
          <StatusDiv BGcolor="completed">
            <h6>Success</h6>
          </StatusDiv>
        )}
        {status === 'rejected' && (
          <StatusDiv BGcolor="rejected">
            <h6>Rejected</h6>
          </StatusDiv>
        )}
      </div>
    ),
  },
];

const HistoryTable = ({ BGcolor }) => {
  const changeStatus = useRef(null);

  return (
    <Ttable BGcolor={BGcolor}>
      <CustomTable changeStatus={changeStatus} columns={columns} data={TradeData} pagination={false} />
    </Ttable>
  );
};

export default HistoryTable;
