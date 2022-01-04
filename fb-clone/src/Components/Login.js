import React from 'react'
import { Button } from '@mui/material'
import '../css/Login.css'

function Login() {
    const signIn = () => {
        // Sign IN HERE
    };

    return (
        <div className = 'login'>
            <div className="login_inner">
                <div className="login_left">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />
                    <h1>Connect with friends and the world around you on Facebook.</h1>
                </div>

                <div className="login_right">
                    <Button onClick= { signIn } variant="contained">Log In</Button>
                </div>  
            </div>           
        </div>
    )
}

export default Login
