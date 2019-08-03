import React  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import {login} from '../../redux/actions/users/login'
import useSignUpForm from '../../components/auxiliar/userLoginForm/userLoginForm';
import { Redirect } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function LogInPage(props) {
  const classes = useStyles();
  const handleLogIn = () => {
    props.login(inputs.email, inputs.password);
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(handleLogIn );

  return (
    
    props.user.token!==null ? <Redirect to = "overview"></Redirect> :
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={inputs.email || ''}
                onChange={handleInputChange} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={inputs.password || ''}
                onChange={handleInputChange} 
              />
            </Grid>
          </Grid>
          <Button onClick={ handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="signUp" variant="body2" >
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
   user: state.user
  }
}


export default (connect(mapStateToProps, {login})(LogInPage))