import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { listDebts } from '../../redux/actions/debts/listDebts';
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from "./style";
import classNames from 'classnames';
import DebtList from '../../components/DebtList/DebtList'
import Title from '../../components/Title/Title'
import Summary from '../../components/Summary/Summary'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

  }));
export class overViewPage extends React.Component {

  componentDidMount =() => {

      this.props.listDebts(this.props.user.token)

  }

  getTotalDebt = (debts) => {

    if ( debts.length > 0 ) {
      const amounts = debts.map( (debt) => {
        return debt.amount;
      });          
        return amounts.reduce((a,b) => a + b)
     } else {
      return  0
     }   
  }

  getLastDate = (debts) => {
    
    if (debts.length > 0) {
     const dates = debts.map( (debt) => {
       return new Date (debt.date);
     });          
     const maxDate =  new Date(Math.max.apply(null,dates));
     return maxDate.toDateString();
    } else {
      return debts;
    }
  }


  render() {

    const { classes } = {...this.props, useStyles};
    return (
      <Container maxWidth="xl" >
      <Grid container spacing={3} className = {classNames(classes.container)} >
         <Grid item xs={12} md={4} lg={3}>
          <Paper>
          <Summary lastDate = { this.getLastDate( this.props.debts.debts) }
          totalDebt = { this.getTotalDebt( this.props.debts.debts) }>
          </Summary>
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper>
          { JSON.stringify(this.props.debts)}
          </Paper>
        </Grid>
        {/* Recent Debts */}
        <Grid item xs={12} className = {classNames(classes.debtPaper)} >
        <Title textAlign= 'left' >Recent Debts</Title>
        {this.props.debts.debts.length > 1 ? 
        <DebtList debts = { this.props.debts.debts} className = {classNames(classes.debtTable)}/> :
        <Typography variant="h6" component="h1"> There's no payment yet</Typography>}
        </Grid>
      </Grid>
    </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
   debts: state.debts,
   user: state.user
  }
}
export default  withStyles(styles, { withTheme: true })(connect(mapStateToProps, {listDebts})(overViewPage))