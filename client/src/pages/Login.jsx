import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'
import Register from './Register';

const Login = (props) => {
    const { loginCbHandler } = props;
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const loginUser = async () => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:3000/heroes/login',
                data: form
            });
            const access_token = result.data.access_token;
            localStorage.setItem("access_token", access_token);
            loginCbHandler(true);
            // navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const submitHandler = () => {
        // console.log(form);
        loginUser();
    }

    return (
        <>
            <div className='login-page row'>
                <div className='col-md-8'>
                    ssss
                </div>
                <div className='col-md-4 form-background h-100'>
                    <div className='mb-5 text-center'>
                        <h3>Login</h3>
                    </div>
                    <div className='login-component'>
                        <div className='form-floating mb-3'>
                            <input
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                type='text'
                                className='form-control'
                                placeholder='Username'
                            />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                type='password'
                                className='form-control'
                                placeholder='Password'
                            />
                            <label for="floatingInput">Password</label>
                        </div>

                        <div className='mb-3 loginBtn'>
                            <button onClick={() => submitHandler()} className='btn btn-success'>
                                LOGIN
                            </button>
                        </div>
                        <div>
                            <Link to='/register'>Registration</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
