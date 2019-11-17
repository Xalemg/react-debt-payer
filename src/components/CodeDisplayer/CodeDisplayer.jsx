import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import{ IconButton }from '@material-ui/core';
import {MessageDisplayer} from '../auxiliar/MessageDisplayer/MessageDisplayer';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export const CodeDisplayer = ({userId}) => {

    const classes = useStyles();


    const [open, setOpen] = React.useState(false);

    const handleCopyCode = (userCode) => {
        navigator.clipboard.writeText(userCode).then(function() {
            setOpen(true);
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }
    return (
        <React.Fragment>
            <Title> You user code is</Title>
            <Typography component="p" variant="h5">
                {userId}
                <IconButton  onClick = { () => handleCopyCode(userId)}><FileCopyIcon color="primary" /> </IconButton>              
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Your friends can share and use the same debts that you by introducing your code
        </Typography>
        <MessageDisplayer
          open={open}
          handleClose = {handleClose}
          message={<span id="message-id">User code copied!</span>}
        />
        </React.Fragment>
    );
};