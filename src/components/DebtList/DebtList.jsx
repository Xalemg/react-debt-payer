import React from 'react';
import GridList from '@material-ui/core/GridList';
import Debt from '../listedDebt/listedDebt'
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

}));

export default function DebtTable(props) {

  const classes = useStyles();
  console.log(props.user.id);
  
  return (
    <GridList cols = {1} className={classes.gridList}>
     { props.debts.map(debt => 
    <Debt user ={props.user.id} userId ={debt.userId}  debtor ={debt.debtor} description = {debt.description} amount =  {debt.amount} reason ={debt.reason} id ={debt._id} date =  {debt.date} key = {debt._id}></Debt>
  )}
    </GridList>
    )
}