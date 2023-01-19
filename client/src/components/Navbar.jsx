import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { GiWoodenDoor } from "react-icons/gi";
import '../styles/Navbar.css';

const Navbar = (props) => {
    const { loginStatus, loginCbHandler } = props;

    const loginHandler = () => {
        loginCbHandler(true);
    }

    const logoutHandler = () => {
        localStorage.clear();
        loginCbHandler(false);
        <Link to='/login'></Link>
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
                                onClick={() => logoutHandler()}><GiWoodenDoor/></a> :
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