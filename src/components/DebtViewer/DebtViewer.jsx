import React from 'react';
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
import deleteDebtModal from '../../components/deleteDebtModal/deleteDebtModal'




function DebtViewer(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    person: props.debt.person,
    reason:props.debt.reason,
    amount: props.debt.amount,
    description:props.debt.description,
    payer:props.debt.description,
  });


  const sendDebtToServer = (values,token) => { 
    if(props.settings.addDebt) {
      props.addDebt(values.person, values.reason,values.amount,values.description, values.date, token)
    }
    if(props.settings.updateDebt) {
      props.updateDebt(props.debt.debtId, values.person, values.reason,values.amount,values.description, values.date, token)
    }  
  }
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [date, handleDateChange] = React.useState(props.debt.date);

  return (
   
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {props.settings.tittle}
          </Typography>
          <React.Fragment>

      <Grid container spacing={5}>
        <Grid item xs={12}>
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
          <FormControlLabel value="negative" control={<Radio   color="primary"/>} label="I got paid" />
          <FormControlLabel value="positive" control={<Radio />}  label="I paid" />
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
        <Button color="primary" variant="contained" className={classes.button} onClick ={() => sendDebtToServer({...values, date}, props.user.token)}>
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

export default connect(mapStateToProps,{addDebt, updateDebt}) (DebtViewer)