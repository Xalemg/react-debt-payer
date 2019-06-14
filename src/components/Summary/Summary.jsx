import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Summary( props ) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Summary</Title>
      <Typography component="p" variant="h4">
       { props.totalDebt + "€"}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        last payment on { props.lastDate}
      </Typography>
      <div>
        <Link color="primary" >
          View stats
        </Link>
      </div>
    </React.Fragment>
  );
}