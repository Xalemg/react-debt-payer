import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getUserInfo } from '../../redux/actions/users/getUserInfo';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from "./style";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../../components/loader/loader';
import { CodeDisplayer } from '../../components/CodeDisplayer/CodeDisplayer';
import {FriendAdder} from '../../components/FriendAdder/FriendAdder';
const useStyles = makeStyles(theme => ({

}));

const FriendsPage = (props) => {

  useEffect(() => {
    if (!props.user) {
      props.getUserInfo(props.user.email, props.user.token);
    }
  }, []);

  const { classes } = { ...props, useStyles };

  return (


    props.user ?
      <Container maxWidth="xl" className={classNames(classes.friendPage)}>
        <Grid container
          spacing={3}
          direction="row"
          justify="space-between"
          direction = "row"
          alignItems="stretch"
          className={classNames(classes.container)} >
         
          <Grid item xl={8} xm={8} lg={8} xs={12 } >
            <Paper>
              <FriendAdder userId={props.user.id} />
            </Paper>
          </Grid>
          <Grid item xl={4} xm={4} lg={4} xs={12}>
            <Paper>
              <CodeDisplayer userId={props.user.id} />
            </Paper>
          </Grid>
          {/* Recent Debts */}
          <Grid item xs={12} >
            <Paper>
              allFriends
          </Paper>
          </Grid>
        </Grid>
      </Container>
      : <Loader />
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, { getUserInfo })(FriendsPage));