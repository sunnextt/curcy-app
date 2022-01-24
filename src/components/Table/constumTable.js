import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
const CustomTable = props => {
  const [data, setData] = useState(props.data);

  const handleStatus = (e, id) => {
    setData(
      data.map(item => (item.id === id ? Object.assign(Object.assign({}, item), { status: e.target.value }) : item)),
    );
  };

  useEffect(() => {
    props.changeStatus.current = handleStatus;
  });

  return React.createElement(Table, Object.assign({}, props, { dataSource: data }));
};
export default CustomTable;
