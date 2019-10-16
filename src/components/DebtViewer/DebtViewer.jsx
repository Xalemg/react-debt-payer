import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'
import CalendarToday from "@material-ui/icons/CalendarTodayOutlined";
import Typography from '@material-ui/core/Typography';
import {FormControl , FormControlLabel, Grid, TextField, Button, Radio, RadioGroup, InputAdornment, IconButton } from '@material-ui/core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {connect} from 'react-redux'
import { addDebt } from '../../redux/actions/debts/addDebt';
import { updateDebt } from '../../redux/actions/debts/updateDebt';
import { getUserInfo } from '../../redux/actions/users/getUserInfo';
import DeleteDebtModal from '../../components/deleteDebtModal/deleteDebtModal'
import Checkbox from '@material-ui/core/Checkbox';
import FriendSelector from '../../components/friendSelector/friendSelector';
import {deleteDebt} from '../../redux/actions/debts/deleteDebt';
import {validateDebt} from '../auxiliar/validators/validators';

function DebtViewer (props) {
  const classes = useStyles();
  console.log(props.debt.userId === props.user.id);

  const [values, setValues] = React.useState({
    person: props.debt.person,
    personId: props.debt.userId === props.user.id ? props.debt.debtorId :  props.debt.userId,
    debtorIsFriend: props.debt.debtorIsFriend,
    payed:  props.debt.payed,
    reason:props.debt.reason,
    amount: props.debt.amount,
    description:props.debt.description,
    payer:"" +(props.debt.userId===props.user.id),
  });
  const [deleteModalOpen, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  useEffect(() => {   
      props.getUserInfo(props.user.email, props.user.token);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] );
  
const handleDeleteIcon = (includeDelete) => { 
 if (includeDelete) {
   return (
  <>
  <Grid item xs={12} sm={4}>
    <Button className={classes.button} color="secondary" onClick ={handleClickOpen} >DELETE</Button>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Button color="secondary" variant="outlined" className={classes.button} onClick={() => props.history ? props.history.goBack() :null}>
    Cancel
    </Button>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Button color="primary" variant="contained" className={classes.button} onClick ={() => sendDebtToServer({...values, date}, props.user)}>
    {props.settings.commitButton}
    </Button>
    </Grid>
    <DeleteDebtModal open= {deleteModalOpen}
        debtId = {props.debt.debtId}
        goBack ={true}
        handleClickOpen ={handleClickOpen}
        handleClose = {handleClose} />
    </>
   )} else {
     console.log(props);
     
   return (
     <>
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
    
    </>
   )}
} 


  const sendDebtToServer = (values,user) => {

    console.log(values);
    let debtValues = [];
    Object.keys(values).forEach(
      ( (name,index) => {
        if(Object.keys(values)[index]){
          debtValues.push({
            name,
            value: Object.values(values)[index],
            required: true
          });
        }
      }))
      const wrongFields = validateDebt(debtValues);
      console.log(wrongFields);
    if ( wrongFields.length != null && wrongFields.length > 0) {
      let userId, debtorId;

      if(values.payer === "true") {
        userId = user.id;
        debtorId = values.personId;
      } else { 
        userId = values.personId;
        debtorId =  user.id;
      }
  
      if(props.settings.addDebt) {
        props.addDebt(userId, debtorId, values.debtorIsFriend===false ? values.person : null, values.reason, values.payer,values.amount,values.description, values.date, values.payed, user.token)
      }
      if(props.settings.updateDebt) {
        props.updateDebt(userId, debtorId, props.debt.debtId, values.debtorIsFriend===false ? values.person : null, values.payer, values.reason,values.amount,values.description, values.date, values.payed, user.token)
      } 
    }     
  }
  const handleChange = name => (event) => {
    
    if(name === "debtorIsFriend") {
      setValues({ ...values, [name]: event.target.checked  });
    }
    else if(name === "payed") {
      setValues({ ...values, [name]: event.target.checked  });
    }
     else{
      setValues({ ...values, [name]: event.target.value });
    }
  };
const handleFriendSelect = (value) => {
  
  setValues({ ...values, 'person': null });
  setValues({ ...values, 'personId': value });
}

  const [date, handleDateChange] = React.useState(props.debt.date);
  
  return (
   
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {props.settings.tittle}
          </Typography>
          <React.Fragment>
          <FormControl>
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
          {!values.debtorIsFriend ?
          <TextField
            required
            id="personName"
            name="personName"
            value={values.person}
            onChange={handleChange('person')}
            label="Person"
            fullWidth
            autoComplete="fname"
          />: <FriendSelector handler = {handleFriendSelect} initialPerson={values.personId} friends = {props.user.friends}/>}
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
          <Grid item xs={3} style ={{paddingLeft:"0px",paddingRight:"0px"}}>
            <FormControlLabel 
            className={classes.checkBox}
            control={
              <Checkbox checked={values.payed} onChange={handleChange('payed')} value="payed" />
            }
            label="Already payed"
          />
          </Grid>
        </Grid>
        {handleDeleteIcon(props.includeDelete)}
      </Grid>
      </FormControl>
    </React.Fragment>
        </Paper>
  );
}
const mapStateToProps = state => {
  return {
   user: state.user,
  }
}

export default connect(mapStateToProps,{addDebt, updateDebt, getUserInfo, deleteDebt}) (DebtViewer)