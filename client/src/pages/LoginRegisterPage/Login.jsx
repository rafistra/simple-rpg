import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';
import '../../styles/Util.css';
import Swal from 'sweetalert2';


const Login = (props) => {
    const { loginCbHandler } = props;
    const navigate = useNavigate();
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
            navigate('/dashboard');
            window.location.reload(true)
        } catch (err) {
            Swal.fire('Login failed. Try Again!')
            console.log(err);
        }
    }

    const submitHandler = () => {
        // console.log(form);
        loginUser();
    }

    return (
        <div className='page-total'>
            <div className='login-page row'>
                <div className='col-md-8 d-flex justify-content-center'>
                    <div className='w-75'>
                        <h2 className='game-title'>Just a Simple RPG</h2>
                        <p>The Dragon has been come. It is your choice to fight the dragon or stay to be an adventurer. You have fate to slay the dragon. You are the hope. Assamble your companion and begin the journey to vanish the threat.</p>
                        <div className=''>
                            <Link to='/register' className='btn buttonA' style={{marginLeft: '0px'}}>Create an Adventurer</Link>
                        </div>
                    </div>
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
                            <button onClick={() => submitHandler()} className='btn buttonA'>
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
