import React, { useRef } from 'react';
import Ttable, { StatusDiv } from './styled';
import CustomTable from 'components/Table/constumTable';
import { TradeData } from 'utilities/mochData';

const columns = [
  {
    key: 'id',
    id: 'id',
    title: 'NAIRA',
    dataIndex: 'naira_amount',
    sorter: (a, b) => a.naira_amount.localeCompare(b.naira_amount),
  },
  {
    key: 'id',
    id: 'id',
    title: 'USD',
    dataIndex: 'usd_amount',
    sorter: (a, b) => a.usd_amount.localeCompare(b.usd_amount),
  },
  {
    key: 'id',
    id: 'id',
    title: 'DATE',
    dataIndex: 'updated_at',
    sorter: (a, b) => a.updated_at.localeCompare(b.updated_at),
  },
  {
    key: 'id',
    id: 'id',
    title: 'STATUS',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
    // render: (_value, { status }) => (
    //   <div>
    //     {status === 'pending' && (
    //       <StatusDiv BGcolor="pending">
    //         <h6>Pending</h6>
    //       </StatusDiv>
    //     )}
    //     {status === 'success' && (
    //       <StatusDiv BGcolor="completed">
    //         <h6>Success</h6>
    //       </StatusDiv>
    //     )}
    //     {status === 'rejected' && (
    //       <StatusDiv BGcolor="rejected">
    //         <h6>Rejected</h6>
    //       </StatusDiv>
    //     )}
    //   </div>
    // ),
  },
];

const HistoryTable = ({ BGcolor, tradeData }) => {
  // function findFirst() {
  //   let value;
  //   tradeData.some(function(node) {
  //     value = node.value;

  //     if (Array.isArray(value)) {
  //       value = findFirst(value);
  //     }

  //     return !_.isUndefined(value);
  //   });
  //   return value;
  // }

  // console.log(tradeData);
  // console.log(findFirst());

  const changeStatus = useRef(null);

  return (
    <Ttable BGcolor={BGcolor}>
      {tradeData && <CustomTable changeStatus={changeStatus} columns={columns} data={TradeData} pagination={false} />}
    </Ttable>
  );
};

export default HistoryTable;
