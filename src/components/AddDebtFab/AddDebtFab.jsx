import React from 'react';
import { withRouter } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Route , Switch} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    color: theme.palette.common.white,
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  }
}));

const  AddDebtFab =  withRouter(({history}) => {
  const classes = useStyles();
  return(
  <Switch>
  <Route exact path= '/debts/addDebt'>
  </Route>
  <Route >
  <Fab
    aria-label="Add"
    type='button'
    className={classes.fab}
    onClick={() => { history.push('/debts/addDebt') }}
  >
  <AddIcon />
  </Fab>
  </Route>
  </Switch>
    )})
export default AddDebtFab;

