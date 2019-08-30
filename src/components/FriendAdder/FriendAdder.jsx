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

export const FriendAdder = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Title> Introduce your friend code</Title>

        <Typography color="textSecondary" className={classes.depositContext}>
            You  can add your friends to share debts with them. Ask them for their user code and introduce it here:
    </Typography>
        <Button >Copy code</Button>
        <div>
        </div>
    </React.Fragment>
    );
};