import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './PlayerPage/Dashboard.jsx';
import Hero from './HeroPage/Hero';
import Class from './ClassPage/Class.jsx';
import HeroStats from './HeroPage/HeroStats';
import HeroCreate from './HeroPage/HeroCreate';
import HeroUpdate from './HeroPage/HeroUpdate';
import StickyBox from "react-sticky-box";
import Party from './Party';
import Quests from './Quests';
import ClassCreate from './ClassPage/ClassCreate';
import ClassUpdate from './ClassPage/ClassUpdate';

const Main = (props) => {
    const { loginStatus, loginCbHandler } = props;
    return (
        <div className=''>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <BrowserRouter>
                    <StickyBox>
                        <Sidebar loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Sidebar>
                    </StickyBox>
                    <Routes style={{ overflow: 'hidden' }}>
                        <Route path='/' element={<Dashboard></Dashboard>} />
                        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
                        <Route path='heroes'>
                            <Route path='' element={<Hero></Hero>}></Route>
                            <Route path='create' element={<HeroCreate></HeroCreate>}></Route>
                            <Route path='stats'>
                                <Route path=':id' element={<HeroStats></HeroStats>}></Route>
                            </Route>
                            <Route path='update'>
                                <Route path=':id' element={<HeroUpdate></HeroUpdate>}></Route>
                            </Route>
                        </Route>
                        <Route path='/classes'>
                            <Route path='' element={<Class></Class>}></Route>
                            <Route path='create' element={<ClassCreate></ClassCreate>}></Route>
                            <Route path='update'>
                                <Route path=':id' element={<ClassUpdate></ClassUpdate>}></Route>
                            </Route>
                        </Route>
                        <Route path='/quests' element={<Quests></Quests>} />
                        <Route path='/parties'>
                            <Route path='' element={<Party></Party>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Main;