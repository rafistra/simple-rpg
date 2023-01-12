import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard.jsx';
import Hero from './Hero.jsx';
import Class from './Class.jsx';
import Navbar from '../components/Navbar';
import HeroStats from './HeroStats';
import HeroCreate from './HeroCreate';
import StickyBox from "react-sticky-box";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <BrowserRouter>
                    <StickyBox>
                        <Sidebar></Sidebar>
                    </StickyBox>
                    <Routes>
                        <Route path='/' element={<Dashboard></Dashboard>} />
                        <Route path='heroes'>
                            <Route path='' element={<Hero></Hero>}></Route>
                            <Route path='create' element={<HeroCreate></HeroCreate>}></Route>
                            <Route path='stats'>
                                <Route path=':id' element={<HeroStats></HeroStats>}></Route>
                            </Route>
                        </Route>
                        <Route path='/classes' element={<Class></Class>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Main;