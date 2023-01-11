import React from 'react';
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navbar nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar