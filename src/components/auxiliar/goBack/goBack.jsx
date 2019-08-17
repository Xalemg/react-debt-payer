
import React  from 'react';

const goBack =(props) => {
    
    if (props.history) {
       return props.history.goBack();
    }
      else {
        return props.history.push('/');
        
      } 

};

export default  goBack;