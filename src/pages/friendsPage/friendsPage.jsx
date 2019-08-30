import React, {useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getUserInfo } from '../../redux/actions/users/getUserInfo';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from "./style";
import classNames from 'classnames';
import DebtList from '../../components/DebtList/DebtList';
import Title from '../../components/Title/Title';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../../components/loader/loader';

const useStyles = makeStyles(theme => ({

  }));

 const FriendsPage = (props) => {
  const user = props.user;
  useEffect((user) => {
    if(!user) {
      props.getUserInfo(props.user.email ,props.user.token);
    }
  }, []);

  const { classes } = {...props, useStyles};

  return (


      props.user ? 
      <Container maxWidth="xl" >
      <Grid container spacing={3} className = {classNames(classes.container)} >
         <Grid item xs={12} >
          <Paper>
            summary of friends
          </Paper>
        </Grid>
        {/* Recent Debts */}
        <Grid item xs={12} className = {classNames(classes.debtPaper)} >
        <Title textAlign= 'left' >Recent Debts</Title>
          <Paper>
            array of friends
          </Paper>
        </Grid>
      </Grid>
    </Container>
     : <Loader/>
       )
}
const mapStateToProps = state => {
  return {
   user: state.user
  }
}
export default  withStyles(styles, { withTheme: true })(connect(mapStateToProps, {getUserInfo})(FriendsPage));