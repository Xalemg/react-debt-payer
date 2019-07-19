import React from 'react';
import {connect} from 'react-redux'
import { addDebt } from '../../redux/actions/debts/addDebt';
import  DebtViewer  from '../../components/DebtViewer/DebtViewer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './style'



function AddDebtPage() {
  const classes = useStyles();

  const sendDebtToServer = (values,token) => {    
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
        commitAction: sendDebtToServer,
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

export default connect(mapStateToProps, {addDebt})(AddDebtPage)