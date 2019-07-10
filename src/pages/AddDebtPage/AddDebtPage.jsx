import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, Grid, TextField, Button, Radio, RadioGroup, Input, Slider  } from '@material-ui/core'



export default function AddDebtPage(props) {
  const classes = useStyles();
  const [payer, satPayer] = React.useState('female');
  const [amount, setAmount] = React.useState(30);

  function handleChange(event) {
    satPayer(event.target.value);
  }
  const handleSliderChange = (event, newValue) => {
    setAmount(newValue);
  };
  const handleInputChange = event => {
    setAmount(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (amount < 0) {
      setAmount(0);
    } else if (amount > 100) {
      setAmount(100);
    }
  };

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
        <Grid container item xs={12} sm={12}>
        <Grid item xs={12} sm={6}>
         <Typography align ="left">Who paid?</Typography>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={payer}
          onChange={handleChange}
        >
          <FormControlLabel value="negative" control={<Radio   color="primary"/>} label="I got paid" />
          <FormControlLabel value="positive" control={<Radio />}  label="I paid" />
        </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography align ="left">What amount?</Typography>
        <Grid item xs={12} sm={12}>
          <Slider
            value={typeof value === 'number' ? amount : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item className={classes.slider}>
          <Input
            className={classes.input}
            value={amount}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              name:"amount",
              label:"€",
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          ></Input>
        <Typography align ="left">€</Typography>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button color="secondary" variant="outlined" className={classes.button} onClick={() => props.history.goBack()}>
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