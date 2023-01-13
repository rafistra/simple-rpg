import React from 'react';
import '../styles/Sidebar.css';
import {
    AiFillHome, AiFillFolderOpen
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { GiBrutalHelm, GiClassicalKnowledge, GiArcTriomphe, GiGuards, GiAbstract076 } from "react-icons/gi";
import StickyBox from "react-sticky-box";

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: '/',
            name: 'The Board',
            icon: <GiArcTriomphe />
        },
        {
            path: '/quests',
            name: 'Quests',
            icon: <GiGuards />
        },
        {
            path: '/heroes',
            name: 'Companions',
            icon: <GiBrutalHelm />
        },
        {
            path: '/classes',
            name: 'Classes',
            icon: <GiClassicalKnowledge />
        },
        {
            path: '/parties',
            name: 'Parties',
            icon: <GiGuards />
        },
    ]
    return (
        <div className='main-sidebar'>
                <div className="sidebar">
                    <div className="top-section">
                        <div className="bars">
                            <GiAbstract076 />
                        </div>
                        <h1 className="logo">Navigation</h1>
                    </div>
                    <div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                                    <div className="icon">{item.icon}</div>
                                    <div className="link_text">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>

            <main>{children}</main>
        </div>

    )
}

export default Sidebar