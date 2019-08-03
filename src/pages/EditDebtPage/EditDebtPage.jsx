import React, {useEffect } from 'react';
import {connect} from 'react-redux'
import { updateDebt } from '../../redux/actions/debts/updateDebt';
import { getDebt } from '../../redux/actions/debts/getDebt';
import  DebtViewer  from '../../components/DebtViewer/DebtViewer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './style'
import Loader from "../../components/loader/loader";


function EditDebtPage(props) {
  const classes = useStyles();
  const { debtId } = props.match.params;
  useEffect(() => {
    if(props.count !== 1) {
      props.getDebt(debtId, props.user.token);
    }
  }, );

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout}>
      {
      props.count === 1 ? 
      <DebtViewer
      debt = {{
        "debtId": debtId,
        "person": props.debt.debtor ,
        "reason": props.debt.reason,
        "amount": Number(props.debt.amount),
        "date": (props.debt.date),
        "description": "",
        "payer":  String(props.debt.amount).charAt(0),
      }}
      settings = {{
        tittle: "Edit payment",
        commitButton: "UPDATE",
        updateDebt: true,
        addDebt: false,
      }}
      date = {new Date()}
      /> 
      : <Loader></Loader>
      }
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
   user: state.user,
   debt: state.debts.debts[0],
   count: state.debts.count
  }
}

export default connect(mapStateToProps, {updateDebt, getDebt})(EditDebtPage)