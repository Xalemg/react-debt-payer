import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import style from "./style.css";

// Generate Sales Data
function createData(date, amount) {
  date =  date.substring(0,10);
  return {date, amount };
}



export default function OverviewChart(props) {
  const debts = debts.reduce( (prev, current, index) => {
    return prev +current;
  } );
  let data = props.debts.map(debt => createData(debt.date,debts.reduce( (prev, current, index) => {
    return prev +current;
  } )));
  return (
      
    <React.Fragment>
      <ResponsiveContainer className={style.container}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 25,
            left: 24,
          }}
        >
          <XAxis dataKey="date">
          <Label position="center" style={{ textAnchor: 'middle'}}>
          </Label>
          </XAxis>
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Owned (€)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}