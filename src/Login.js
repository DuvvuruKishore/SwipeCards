import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typewriter from "typewriter-effect";
import './login.css';

function Login() {
    return (
        <div className="background ">
        <div className="login">
            <div className="header sub">
            <Typewriter
            options={{
              strings: ["welcome to Trinkerr"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
           </div>
           <div className="links">
           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
           <Button variant="contained" className="link1" color="primary">Signup</Button>
           </Link>
           </div>
           <br/>
           <Link to="/SignIn" style={{ textDecoration: 'none' }}>
           <Button variant="contained" className="link2" color="primary">SignIn</Button>
           </Link>
          
           </div>
        </div>
    )
}

export default Login
