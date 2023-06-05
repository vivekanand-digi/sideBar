import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';

const data = [
  { name: 'Cat 1', value: 10 },
  { name: 'Cat 2', value: 15 },
  { name: 'Cat 3', value: 7 },
  { name: 'Cat 4', value: 20 },
  { name: 'Cat 5', value: 30 },
  { name: 'Cat 6', value: 27 },
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">
        {payload.value}
      </text>
    </g>
  );
};

const BarChartComponent = () => {
  return (
    <div className="chart-container">
      <BarChart width={500} height={300} data={data} margin={{ left: 20, bottom: 20 }}>
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8">
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
