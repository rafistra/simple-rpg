import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './LoginRegisterPage/Login'
import Register from './LoginRegisterPage/Register'

const LoginRegister = (props) => {
    const { loginStatus, loginCbHandler } = props;
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' loginStatus={loginStatus}>
                        <Route path='/' element={<Login loginCbHandler={loginCbHandler}></Login>}></Route>
                        <Route path='login' element={<Login loginCbHandler={loginCbHandler}></Login>}></Route>
                        <Route className='text-center' path='register' element={<Register></Register>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default LoginRegister