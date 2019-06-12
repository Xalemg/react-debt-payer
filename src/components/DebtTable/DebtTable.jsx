import React from 'react';

import Debt from '../Debt/Debt'


export default function DebtTable(props) {


console.log(props.debts.length );

  props.debts.map(debt => 
    <Debt debtor ={debt.debtor} amount =  {debt.amount} reason ="invent" date =  {debt.amount}></Debt>
  ) 


  return (
    <>
     { props.debts.map(debt => 
    <Debt debtor ={debt.debtor} amount =  {debt.amount} reason ="invent" date =  {debt.amount} key = {debt._id}></Debt>
  )}
    </>
    )
}