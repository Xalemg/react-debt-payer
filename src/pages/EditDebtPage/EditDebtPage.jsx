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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
 
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout}>
      {
      props.count === 1 ? 
      <DebtViewer
      includeDelete= {true}
      debt = {{
        "debtId": debtId,
        "person": props.debt.debtor ,
        "reason": props.debt.reason,
        "userId": props.debt.user_id,
        "payed": props.debt.payed,
        "debtorIsFriend": 
        (props.debt.user_id !==null && props.debt.debtor_id !==undefined && props.debt.debtor_id !=="") 
        && (props.debt.user_id !==null && props.debt.user_id !==undefined && props.debt.user_id !==""),
        "debtorId": props.debt.debtor_id,
        "amount": Number(props.debt.amount),
        "date": (props.debt.date),
        "description":  props.debt.description,
        "payer": ("" + props.debt.userId!==props.user.id),
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