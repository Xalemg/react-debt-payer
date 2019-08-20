import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
      width: '100%',
    }

}));


 function FriendSelector (props) {
     console.log(props);
     
    const classes = useStyles();

    const [values, setValues] = React.useState(props.friends);
  
    const inputLabel = React.useRef(null);
  
    function handleChange(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    }
    return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="email-helper">Email</InputLabel>
          <Select
            value={props.friends}
            inputProps={{
              name: 'email',
              id: 'id',
            }}
          >
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            { props.friends.map( (friend) => {
                 return <MenuItem key={friend.email} value={friend.id} onClick = { () =>handleChange(friend.email,friend.id)}>{friend.email}</MenuItem>
            }) }
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
    );
  }

  export default FriendSelector;