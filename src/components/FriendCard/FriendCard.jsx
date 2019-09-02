import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  Collapse,
  IconButton,  
  Typography,
  Grid,
 } from '@material-ui/core';
 import DebtList from '../../components/DebtList/DebtList';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { calculateSum } from '../../components/auxiliar/functions/auxFunctions';
import OverviewChart from '../../components/overviewChart/overviewChart';

const useStyles = makeStyles(theme => ({
  card: {
    width: 360,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    height:60,
    width:60,
  },
}));

export function FriendCard({id, debts, name, email, userId}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={name}
        subheader={email}
      />
      <CardContent>
          <Grid container >
            <Grid item style={{height:"200px"}} xl={12}>
              <OverviewChart  debts= {debts} userId = {userId} legend = {false} />
            </Grid>
          </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          Your total debts with {name} are {calculateSum(debts,userId)}€
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <DebtList debts = {debts} user={{id, name, email}} />
        </CardContent>
      </Collapse>
    </Card>
  );
}