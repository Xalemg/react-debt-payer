import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export const CodeDisplayer = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title> You user code is</Title>
            <Typography component="p" variant="h5">
                {props.userId}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Your friends can share and use the same debts that you by introducing your code
        </Typography>
            <Button >Copy code</Button>
            <div>
            </div>
        </React.Fragment>
    );
};