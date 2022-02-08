import React, { useRef } from 'react';
import Ttable, { StatusDiv } from './styled';
import { Table } from 'antd';
import { formateDate } from 'utilities/formatDate';

const columns = [
  {
    title: 'NAIRA',
    dataIndex: 'naira_amount',
    render: naira_amount => `₦ ${naira_amount}`,
    align: 'center',
  },
  {
    title: 'USD',
    dataIndex: 'usd_amount',
    render: usd_amount => `$ ${usd_amount}`,
    align: 'center',
  },
  {
    title: 'DATE',
    dataIndex: 'updated_at',
    align: 'center',
    sorter: (a, b) => a.updated_at.localeCompare(b.updated_at),
    render: (_value, { updated_at }) => {
      let theDate;

      theDate = formateDate(updated_at);

      return <div>{theDate && theDate}</div>;
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    align: 'center',
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

const HistoryTable = ({ BGcolor, tradeData, size }) => {
  const changeStatus = useRef(null);

  return (
    <Ttable BGcolor={BGcolor}>
      {tradeData && (
        <Table
          rowKey={record => record.id}
          changeStatus={changeStatus}
          columns={columns}
          dataSource={tradeData}
          pagination={{ pageSize: size }}
          size="small"
        />
      )}
    </Ttable>
  );
};

export default HistoryTable;
