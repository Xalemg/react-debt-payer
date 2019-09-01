import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import style from "./style.css";
// Generate Sales Data
function createData(date, amount) {
  date =  date.substring(0,10);
  return {date, amount };
}



export default function OverviewChart(props) {
  let sum = 0;
  console.log(props.debts);
  const data = props.debts.map((debt,i,debts) =>{
    debt.userId === props.userId ? sum = sum + debt.amount : sum = sum - debt.amount;
    return createData(debt.date, sum);
  },sum);

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
              {props.legend ? "Owned (€)" : null}
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}