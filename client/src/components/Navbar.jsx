import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, useNavigate } from 'react-router-dom';
import { GiWoodenDoor } from "react-icons/gi";
import '../styles/Navbar.css';
import Login from '../pages/LoginRegisterPage/Login';


const Navbar = (props) => {
    const { loginStatus, loginCbHandler } = props;
    // const navigation = useNavigate();

    const loginHandler = () => {
        loginCbHandler(true);
    }

    const logoutHandler = () => {
        localStorage.clear();
        loginCbHandler(false);
        
        // navigation('/');
    }

    return (
        <div>
            <ul className="navbar nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link buttonNav" aria-current="page" href="#">Player</a>
                </li>
                <li className="nav-item">
                    {
                        loginStatus ?
                            <a
                                className='nav-link buttonNav' href='#'
                                onClick={() => logoutHandler()}><GiWoodenDoor /></a> :
                            <a
                                className='nav-link' href='#'
                                onClick={() => loginHandler()}>Login</a>
                    }
                </li>
            </ul>
        </div>
    )
}

export default Navbar