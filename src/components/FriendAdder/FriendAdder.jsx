import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import { TextField, IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { connect } from 'react-redux';
import {addFriend} from '../../redux/actions/users/addFriend';
import { getUserInfo } from '../../redux/actions/users/getUserInfo';


const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const  FriendAdder =  ({userId, token, addFriend, userMail}) => {

    const [value,setValue] = useState("");

    const handleAddFriend = (userId, friendId, userMail, token) => { 
        addFriend(userId, userMail, friendId, token);
      }
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
        value = {value}
        onChange={ (event) => setValue(event.target.value)}
        style={{ margin:'10px 5px', width:' 82% '}}
        placeholder="Example: 5cfcd95b7497b90d1405334b"
        />
        <IconButton onClick = {() => handleAddFriend(userId, value, userMail, token)}
        style={{margin:'15px 0 0 5px'}} color="primary" ><PersonAddIcon/> </IconButton>
    </React.Fragment>
    );
};

export default (connect(null, {addFriend, getUserInfo})(FriendAdder));