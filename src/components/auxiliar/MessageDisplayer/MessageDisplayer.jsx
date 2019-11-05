import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import{ IconButton, Snackbar }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export const MessageDisplayer = ({message, open, handleClose}) => {
    
    const classes = useStyles();
    console.log(open);
    
    return(
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    )
}
