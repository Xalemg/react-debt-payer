import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const copyCode = (userCode) => {
    navigator.clipboard.writeText(userCode).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}

export const CodeDisplayer = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title> You user code is</Title>
            <Typography component="p" variant="h5">
                {props.userId}          <IconButton  onClick = { () =>copyCode(props.userId)}><FileCopyIcon color="primary" /> </IconButton>              
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Your friends can share and use the same debts that you by introducing your code
        </Typography>
            <div>
            </div>
        </React.Fragment>
    );
};