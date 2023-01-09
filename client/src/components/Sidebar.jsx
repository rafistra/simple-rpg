import React from 'react';
import './Sidebar.css';
import {
    AiFillHome, AiFillFolderOpen
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:'/',
            name:'Dahsboard',
            icon:<AiFillHome/>
        }, 
        {
            path:'/heroes',
            name:'Heroes',
            icon:<AiFillHome/>
        }, 
        {
            path:'/classes',
            name:'Classes',
            icon:<AiFillHome/>
        }
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen ? '250px' : '50px'}} className="sidebar">
            <div className="top-section">
                <h1 style={{display: isOpen ? 'block' : 'none'}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? '50px' : '0px'}} className="bars">
                    <AiFillFolderOpen onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? 'block' : 'none'}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar