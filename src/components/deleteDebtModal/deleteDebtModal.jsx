import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {connect} from 'react-redux'
import { deleteDebt } from '../../redux/actions/debts/deleteDebt';
import {listDebts} from '../../redux/actions/debts/listDebts';
import history from  '../auxiliar/history/history';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

   function DeleteDebtModal(props) {


    function handleDeleteClick() {    
      props.deleteDebt(props.token, props.debtId);
      return props.goBack ? history.goBack() : null;
    }

    return (
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this debt?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You are about to permanently delete this debt, you could also marked it as payed. Are you sure you want to delete it?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              CANCEL
            </Button>
            <Button onClick={handleDeleteClick} color="secondary">
              DELETE
            </Button>
          </DialogActions>
        </Dialog>);
  }

  const mapStateToProps = state => {
    return {
     token: state.user.token
    }
  }

  export default (connect(mapStateToProps, {deleteDebt,listDebts})(DeleteDebtModal))