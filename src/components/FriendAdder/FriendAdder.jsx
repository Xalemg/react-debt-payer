import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import { TextField, IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export const FriendAdder = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Title>Add friends</Title>
        <Typography color="textSecondary" className={classes.depositContext}>
            You  can add your friends to share debts with them. Ask them for their user code and introduce it here:
    </Typography>
      <TextField
        id="standard-full-width"
        label="Friend code"
        variant="outlined"
        style={{ margin:'10px 5px', width:' 82% '}}
        placeholder="Example: 5cfcd95b7497b90d1405334b "
        />
        <IconButton style={{margin:'15px 0 0 5px'}} color="primary"  ><PersonAddIcon /> </IconButton>
    </React.Fragment>
    );
};