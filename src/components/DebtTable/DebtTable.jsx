import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
      <Grid container>
        <Grid  xs={8}>
        <Typography variant="h6" component="h1">
         Reason
        </Typography>
        <Typography className={classes.pos} >
          Debtor
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Grid>
        {/*Total*/}
        <Grid item xs={4}>
        <Typography component="p">
          Date
        </Typography>
        <Typography variant="h6" component="h1">
          Amount
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}