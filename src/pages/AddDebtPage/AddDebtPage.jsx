import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, Grid, TextField, Checkbox, Button, Radio, RadioGroup,  } from '@material-ui/core'
import Autosuggest from 'react-autosuggest';




export default function AddDebtPage() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

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
            label="Debtor"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reason"
            name="reason"
            label="Reason"
            fullWidth
            autoComplete="reason"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            id="amount"
            name="amount"
            label="Amount"
            fullWidth
            autoComplete="amount"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Grid item xs={12} sm={6}>
         <Typography>Who paid?</Typography>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="negative" control={<Radio   color="primary"/>} label="I got paid" />
          <FormControlLabel value="positive" control={<Radio />}  label="I paid" />
        </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="secondary" variant="outlined" className={classes.button}>
        Cancel
        </Button>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="secondary" variant="outlined" className={classes.button}>
        Cancel
        </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="primary" variant="contained" className={classes.button}>
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