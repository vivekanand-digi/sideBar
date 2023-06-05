import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MainPage = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 5000, pv: 3800, amt: 2500 },
    { name: 'July', uv: 2333, pv: 2132, amt: 2200 },
    { name: 'Aug', uv: 3400, pv: 2900, amt: 4000 },
    { name: 'Sep', uv: 3200, pv: 3800, amt: 2000 },
    { name: 'Oct', uv: 1000, pv: 4510, amt: 4300 },
    { name: 'Nov', uv: 4000, pv: 2288, amt: 4300 },
    { name: 'Dec', uv: 5000, pv: 7000, amt: 4400 },
  ];
  return (
    <>
    <LineChart width={900} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
    </>
  );
};

export default MainPage;
