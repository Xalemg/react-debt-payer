import React, {useEffect } from 'react';
import {connect} from 'react-redux'
import { updateDebt } from '../../redux/actions/debts/updateDebt';
import { getDebt } from '../../redux/actions/debts/getDebt';
import  DebtViewer  from '../../components/DebtViewer/DebtViewer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './style'



function EditDebtPage(props) {
  const classes = useStyles();
  useEffect(() => {
    const { debtId } = props.match.params;
    console.log(debtId);
    
    props.getDebt(debtId, props.user.token);
  }, );


  const sendUpdatedDebtToServer = (values,token) => {    
    this.props.addDebt(values.person, values.reason,values.amount,values.description, values.date, token)
  }

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout}>

      <DebtViewer
      debt = {{
        "person": "",
        "reason": "",
        "amount": Number(30),
        "description": "",
        "payer": "",
      }}
      settings = {{
        tittle: "Add new payment",
        commitButton: "ADD",
        commitAction: sendUpdatedDebtToServer,
      }}
      date = {new Date()}
      />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
   user: state.user
  }
}

export default connect(mapStateToProps, {updateDebt, getDebt})(EditDebtPage)