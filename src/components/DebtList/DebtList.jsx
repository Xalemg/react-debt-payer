import React from 'react';
import GridList from '@material-ui/core/GridList';
import Debt from '../Debt/Debt'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridList: {
    backgroundColor: "theme.palette.background.paper",
    width: "100%",
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-evenly',
    flexDirection: "column",
  },
  debt : {
   marginTop: "50px" 
  }
}));

export default function DebtTable(props) {

  const classes = useStyles();

  return (
    <GridList cols = {1} className={classes.gridList}>
     { props.debts.map(debt => 
    <Debt className={classes.debt} debtor ={debt.debtor} description = {debt.description} amount =  {debt.amount} reason ={debt.reason} date =  {debt.date} key = {debt._id}></Debt>
  )}
    </GridList>
    )
}