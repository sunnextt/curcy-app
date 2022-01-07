import React from 'react';
import { ResponsiveContainer,Line, CartesianGrid, YAxis, Tooltip, LineChart } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 10,
  },
  {
    name: 'Page B',
    uv: 40,
  },
  {
    name: 'Page C',
    uv: 60,
  },
  {
    name: 'Page D',
    uv: 40,
  },
  {
    name: 'Page E',
    uv: 60,
  },
  {
    name: 'Page F',
    uv: 100,
  },
];

const renderLineChart = (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
    </LineChart>
  </ResponsiveContainer>
);

const TransactionGraph = () => {
  return <div>{renderLineChart}</div>;
};

export default TransactionGraph;
