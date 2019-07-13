import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'
import CalendarToday from "@material-ui/icons/CalendarTodayOutlined";
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, Grid, TextField, Button, Radio, RadioGroup, InputAdornment, IconButton } from '@material-ui/core'
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {connect} from 'react-redux'
import { addDebt } from '../../redux/actions/debts/addDebt';



function AddDebtPage(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    person: '',
    reason:'',
    amount: Number(30),
    description:'',
    payer:""
  });


  const sendDebtToServer = values => {
    
  }
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [date, handleDateChange] = React.useState(new Date("2019-01-01T18:54"));

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add new payment
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
        <Button color="primary" variant="contained" className={classes.button} onClick ={sendDebtToServer({...values, date})}>
        ADD
      </Button>
        </Grid>
      </Grid>
    </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default connect(null, {addDebt})(AddDebtPage)