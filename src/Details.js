import React, { useState } from 'react';
import { FormControl,TextField ,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './details.css';
import UserName from './UserName';

const UserContext = React.createContext();
export const UserProvider = UserContext.Provider

export const UserConsumer = UserContext.Consumer


function Details() {

  const [username,setUsername]=useState();

  const updateField=(e)=>{
     setUsername(e.target.value)
  }

    return (
     <div className="backgroundDetails">
      
        <div className="details">
       <form>
       <div className="text">
        <label className="userName">UserName</label>
        <TextField variant="outlined" placeholder="enter username" onChange={(e)=>updateField(e)} />  
        </div>
        <div className="submitUsername">
      <Link to="/Details1" style={{ textDecoration: 'none' }}>
      <Button variant="contained" type="submit" color="primary" >
      Submit
    </Button>
    
       </Link>
       </div>
      </form>
      </div>
    

       
      
      </div>
  
    )
}

export default Details
