import React, { useRef } from 'react';
import Ttable, { StatusDiv } from './styled';
import { Table } from 'antd';

const columns = [
  {
    title: 'NAIRA',
    dataIndex: 'naira_amount',
    render: naira_amount => `₦ ${naira_amount}`,
    sorter: (a, b) => a.naira_amount.localeCompare(b.naira_amount),
  },
  {
    title: 'USD',
    dataIndex: 'usd_amount',
    render: usd_amount => `$ ${usd_amount}`,
    sorter: (a, b) => a.usd_amount.localeCompare(b.usd_amount),
  },
  {
    title: 'DATE',
    dataIndex: 'updated_at',
    render: updated_at => `${updated_at}`,
    sorter: (a, b) => a.updated_at.localeCompare(b.updated_at),
  },
  {
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

const HistoryTable = ({ BGcolor, tradeData }) => {
  const changeStatus = useRef(null);

  console.log(tradeData);
  return (
    <Ttable BGcolor={BGcolor}>
      {tradeData && (
        <Table
          rowKey={record => record.id}
          changeStatus={changeStatus}
          columns={columns}
          dataSource={tradeData}
          pagination={{ pageSize: 3 }}
        />
      )}
    </Ttable>
  );
};

export default HistoryTable;
