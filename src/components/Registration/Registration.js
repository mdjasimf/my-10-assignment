import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import '.././Login/Login.css';
const Registration = () => {
    const [createUserWithEmailAndPassword, user, loading, hookError,] = useCreateUserWithEmailAndPassword(auth);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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
    // const handleConfirmPasswordChange = e => {
    //     if (e.target.value === userInfo.password) {
    //         setUserInfo({ ...userInfo, confirmPassword: e.target.value });
    //         setErrors({ ...errors, password: '' });
    //     }
    //     else {
    //         setErrors({ ...errors, password: 'Password do not match' })
    //         setUserInfo({ ...userInfo, confirmPassword: '' });
    //     }
    // }

    const handleRegistration = e => {
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        e.preventDefault();
    }

    useEffect(() => {
        if (hookError) {
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

    }, [hookError]);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <h1 className='text-danger'>Lodding</h1>
    }

    return (
        <div>
            <h1 className='login-title'>PLEASE REGISTRATION</h1>
            <form onSubmit={handleRegistration} className='login-container'>
                <input onChange={handleEmailChange} type="email" placeholder='Your email' /><br />
                {errors?.email && <p>{errors.email}</p>}
                <input onChange={handlePasswordChange} type="password" placeholder='Your password' /><br />
                {errors?.password && <p>{errors.password}</p>}<br />
                {/* <input onChange={handleConfirmPasswordChange} type="password" placeholder='confirm password' /> */}
                <button>REGISTRATION</button>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    )
};

export default Registration;