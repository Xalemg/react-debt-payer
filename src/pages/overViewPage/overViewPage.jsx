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

export class overViewPage extends React.Component {


  componentDidMount =() => {

      this.props.listDebts(this.props.user.token)
    
  }


  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl" >
      <Grid container spacing={3}  className = {classNames(classes.container)} >
         <Grid item xs={12} md={4} lg={3}>
          <Paper>
          <Summary total = {
            this.props.debts.debts.length > 1 ? 
            this.props.debts.debts.reduce( ( a, b ) => {
            return a.amount + b.amount
          }) :
          0
        }>
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
        {console.log(this.props.debts.debts)
        }
        <Grid item xs={12} className = {classNames(classes.debtPaper)} >
        <Title textAlign= 'left' >Recent Debts</Title>
        {this.props.debts.debts.length > 1 ? 
        <DebtList debts = { this.props.debts.debts} className = {classNames(classes.debtTable)}/> :
        <Typography variant="h6" component="h1"> No hay ninguna deuda todavia</Typography>}
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