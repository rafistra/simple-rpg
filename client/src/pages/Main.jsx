import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard.jsx';
import Hero from './Hero.jsx';
import Class from './Class.jsx';
import Navbar from '../components/Navbar';
import HeroStats from './HeroStats';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Dashboard></Dashboard>} />
                        <Route path='heroes'>
                            <Route path='' element={<Hero></Hero>}></Route>
                            <Route path='stats'>
                                <Route path=':id' element={<HeroStats></HeroStats>}></Route>
                            </Route>
                        </Route>
                        <Route path='/classes' element={<Class></Class>} />
                    </Routes>
                </Sidebar>
            </BrowserRouter>

        </div>
    )
}

export default Main;