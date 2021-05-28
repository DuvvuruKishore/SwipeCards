import { Button } from '@material-ui/core'
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './SignIn.css';
import {Link} from 'react-router-dom';


function SignIn() {

    const [number,setNumber]=useState("")
    const [otp,setOtp]=useState("");
    

    const setValue=(e)=>{
     setNumber(e.target.value);
     console.log(e.target.value);
    }

    const setOtpValue=(e)=>{
        setOtp(e.target.value);
    }

    
    
    return (

    
        <div className="signIn">
        <h1 className="headSignup">SIGNIN</h1>
        <Card className="card">
        <Typography variant="h5" className="phoneNumber">PhoneNumber</Typography>
        <div className="centerBlock">
        <TextField variant="outlined" onChange={(e)=>setValue(e)}  />
        </div>
         
     
        <Accordion>
        <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <div className="otp">
         <Button variant="contained" color="primary" >
         GETOTP
       </Button>
        </div>
      </AccordionSummary>
      {number.length===10?
      <AccordionDetails>
      <div className="enterOtp">
      <TextField  variant="outlined" onChange={(e)=>setOtpValue(e)} />
      </div>
      {otp==="0000"?
      <Link to="/Home" style={{ textDecoration: 'none' }}>
      
      <Button variant="contained" color="primary" className="submit">
      Submit
    </Button>
    
       </Link>:
       "enter correct OTP"
      }

              </AccordionDetails>
              :<p className="detail">please enter the correct number</p>}
            
             
       
     </Accordion>
   
     </Card>
     </div>
    
    )
}

export default SignIn
