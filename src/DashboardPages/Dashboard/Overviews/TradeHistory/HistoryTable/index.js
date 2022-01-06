import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'NAIRA',
    dataIndex: 'naira',
    sorter: {
      compare: (a, b) => a.naira - b.naira,
    },
  },
  {
    title: 'USD',
    dataIndex: 'usd',
    sorter: {
      compare: (a, b) => a.usd - b.usd,
    },
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    sorter: {
      compare: (a, b) => a.date - b.date,
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    sorter: {
      compare: (a, b) => a.status - b.status,
    },
  },
];

const data = [
  {
    key: '1',
    naira: '₦ 3,000.00',
    usd: '$ 8.00',
    date: '23 Dec. 2021',
    status: 'Rejected',
  },
  {
    key: '2',
    naira: '₦ 3,000.00',
    usd: '$ 8.00',
    date: '23 Dec. 2021',
    status: 'Rejected',
  },
  {
    key: '3',
    naira: '₦ 3,000.00',
    usd: '$ 8.00',
    date: '23 Dec. 2021',
    status: 'Rejected',
  },
  {
    key: '4',
    naira: '₦ 3,000.00',
    usd: '$ 8.00',
    date: '23 Dec. 2021',
    status: 'Rejected',
  },
];

function onChange(filters, sorter, extra) {
  console.log('params', filters, sorter, extra);
}

const HistoryTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />
    </div>
  );
};

export default HistoryTable;
