import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })
    const handleEmailChange = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: '' });
        }
        else {
            setErrors({ ...errors, email: 'please enter valid email' })
            setUserInfo({ ...userInfo, email: '' });
        }

    }
    const handlePasswordChange = e => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'minimut 8 cahrecter and uppercase and lowercase' })
            setUserInfo({ ...userInfo, password: '' });
        }
    }
    const handleLogin = e => {
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
        e.preventDefault();
    }
    useEffect(() => {
        if (hookError || googleError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast('please give a valid email');
                    break;
                case "auth/invalid-password":
                    toast('please give a valid password');
                    break;
                default:
                    toast('something went wrong')
            }

        }

    }, [hookError || googleError]);
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    if (loading || loading2) {
        return <p>Lodding</p>
    }
    const SendPasswordReset = () => {
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
            })
    };
    return (
        <div>
            <h1 className='login-title'>LOGIN</h1>
            <form onSubmit={handleLogin} className='login-container'>
                <input onChange={handleEmailChange} type="email" placeholder='Your email' /><br />
                {errors?.email && <p>{errors.email}</p>}
                <input onChange={handlePasswordChange} type="password" placeholder='Your password' /><br />
                {errors?.password && <p>{errors.password}</p>}
                <button onClick={SendPasswordReset}>resepass</button>
                <button>Login</button>
                <p>Have any account?<Link to={'/registration'}>Please Registration</Link></p>
                <ToastContainer></ToastContainer>
            </form>
            <button onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;