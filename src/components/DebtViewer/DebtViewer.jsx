import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'
import CalendarToday from "@material-ui/icons/CalendarTodayOutlined";
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, Grid, TextField, Button, Radio, RadioGroup, InputAdornment, IconButton } from '@material-ui/core'
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {connect} from 'react-redux'
import { addDebt } from '../../redux/actions/debts/addDebt';
import { updateDebt } from '../../redux/actions/debts/updateDebt';
import { getUserInfo } from '../../redux/actions/users/getUserInfo';
import deleteDebtModal from '../../components/deleteDebtModal/deleteDebtModal'
import Checkbox from '@material-ui/core/Checkbox';




function DebtViewer(props) {
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    person: props.debt.person,
    personId: props.debt.personId,
    debtorIsFriend: false,
    reason:props.debt.reason,
    amount: props.debt.amount,
    description:props.debt.description,
    payer:props.debt.payer,
  });
  useEffect(() => {
    console.log(props.user.email);
    if(props.user.friends === null) {
      props.getUserInfo(props.user.email, props.user.token);
    } 
  }, );


  const sendDebtToServer = (values,user) => { 
    console.log(values.debtorIsFriend);
    let userId, debtorId;
    if(values.payer === "true") {
      userId = user.id;
      debtorId = values.personId;
    } else {
      userId = values.personId;
      debtorId =  user.id;
    }

    if(props.settings.addDebt) {
      props.addDebt(userId, debtorId,values.person, values.reason, values.payer,values.amount,values.description, values.date, user.token)
    }
    if(props.settings.updateDebt) {
      props.updateDebt(userId, debtorId, props.debt.debtId, values.person, values.payer, values.reason,values.amount,values.description, values.date, user.token)
    }  
  }
  const handleChange = name => event => {
    console.log(values.debtorIsFriend);
    if(name === "debtorIsFriend") {
      setValues({ ...values, [name]: event.target.checked  });
    } else{
      setValues({ ...values, [name]: event.target.value });
    }
  };
  const [date, handleDateChange] = React.useState(props.debt.date);

  return (
   
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {props.settings.tittle}
          </Typography>
          <React.Fragment>

      <Grid container spacing={5}>
        <Grid item xs={3} style ={{paddingLeft:"0px",paddingRight:"0px"}}>
          <FormControlLabel 
          className={classes.checkBox}
          control={
            <Checkbox checked={values.debtorIsFriend} onChange={handleChange('debtorIsFriend')} value="debtorIsFriend" />
          }
          label="Friend"
        />
        </Grid>
        <Grid item xs={9} style ={{paddingLeft:"0px"}}>
          <TextField
            required
            id="personName"
            name="personName"
            value={values.person}
            onChange={handleChange('person')}
            label="Person"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reason"
            name="reason"
            value={values.reason}
            onChange={handleChange('reason')}
            label="Reason"
            fullWidth
            autoComplete="reason"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.alignLeft}
            required
            id="amount"
            name="amount"
            label="Amount"
            value={values.amount}
            onChange={handleChange('amount')}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
            autoComplete="amount"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField 
          id="description" 
          name="description" 
          label="Description" 
          value={values.description}
          onChange={handleChange('description')}
          fullWidth
          multiline
          variant="outlined"
          rows ="3"
          />
        </Grid>
        <Grid container item xs={12} sm={12}>
        <Grid item xs={12} sm={6}>
         <Typography >Who paid?</Typography>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={values.payer}
          onChange={handleChange('payer')}
        >
          <FormControlLabel value="false" control={<Radio color="primary"/>} label="I got paid" />
          <FormControlLabel value="true" control={<Radio />}  label="I paid" />
        </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textField}>
      <Typography gutterBottom>
        At what time?
      </Typography >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        id="date" 
        name="date"
        aria-label="date"
        required
        inputVariant="outlined"
        value={date}
        format="HH:mm    dd/MM/yyyy"
        showTodayButton
        onChange={handleDateChange}
        margin="normal"
        ampm={false}
        onError={console.log}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CalendarToday />
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
      </MuiPickersUtilsProvider>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="secondary" variant="outlined" className={classes.button} onClick={() => props.history.goBack()}>
        Cancel
        </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="primary" variant="contained" className={classes.button} onClick ={() => sendDebtToServer({...values, date}, props.user)}>
        {props.settings.commitButton}
      </Button>
        </Grid>
      </Grid>
    </React.Fragment>
        </Paper>
  );
}
const mapStateToProps = state => {
  return {
   user: state.user,
  }
}

export default connect(mapStateToProps,{addDebt, updateDebt, getUserInfo}) (DebtViewer)