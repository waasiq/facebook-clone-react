import React from 'react'
import { Button } from '@mui/material'
import '../css/Login.css'

//!Import from other components 
import {auth, provider , signInWithPopup} from '../Firebase.js';
import { useStateValue } from '../Context/StateProvider.js';
import { actionTypes } from '../Context/reducer.js';

function Login() {
    const [state, dispatch ] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {                
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user
                })
                // redux action? --> dispatch({ type: SET_USER, user });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                // If required console log this
            });
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
