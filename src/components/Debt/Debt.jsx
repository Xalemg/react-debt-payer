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
  alignLeft : {
    marginLeft: '0px',
  }
});

export default function Debt(props) {
  const classes = useStyles();

  return (
      
    <Card >
      <CardContent >
      <Grid container >
        <Grid item xs={8}>
        <Typography variant="h6" component="h1">
        {props.reason}
        </Typography>
        <Typography className={classes.pos}>
        {props.debtor}
        </Typography>
        </Grid>
        <Grid item xs={4} className={classes.alignLeft} >
        <Typography  component="p" align = 'right'>
        {props.date}
        </Typography>
        <Typography variant="h6" component="h1"  align = 'right'>
        {props.amount}
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}