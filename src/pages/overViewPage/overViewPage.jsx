import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { listDebts } from '../../redux/actions/debts/listDebts';
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from "./style";
import classNames from 'classnames';
import DebtTable from '../../components/DebtTable/DebtTable'
import Title from '../../components/Title/Title'
export class overViewPage extends React.Component {


  componentDidMount =() => {

      this.props.listDebts(this.props.user.token)
    
  }


  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl" >
      <Grid container spacing={3}  className = {classNames(classes.container)} >
         {/* Overall sumary */}
         <Grid item xs={12} md={4} lg={3}>
          <Paper>
          { JSON.stringify(this.props.debts)}
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper>
          { JSON.stringify(this.props.debts)}
          </Paper>
        </Grid>
        {/* Recent Debts */}
        <Grid item xs={12} className = {classNames(classes.debtPaper)}>
        <Title textAlign= 'left' > Recent Debts</Title>
          <DebtTable debts = { JSON.stringify(this.props.debts) } className = {classNames(classes.debtTable)}/>
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