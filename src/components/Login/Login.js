import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h1 className='login-title'>LOGIN</h1>
            <form className='login-container'>
                <input type="email" placeholder='Your email' /><br />
                <input type="password" placeholder='Your password' /><br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;