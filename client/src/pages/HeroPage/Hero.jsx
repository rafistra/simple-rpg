import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../styles/Util.css'
import { Link } from 'react-router-dom';
import { GiIronCross, GiMagnifyingGlass, GiBoltShield } from "react-icons/gi";
import HeroList from '../../components/HeroList';
import { searchHero } from '../../fetches/heroFetch';

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";

const Hero = () => {
    const [searches, setSearches] = useState([]);
    const [getSearchTrigger, setGetSearchTrigger] = useState(true);
    useEffect(() => {
        searchHero(result => setSearches(result));
    }, [getSearchTrigger]);

    const searchHandler = () => {
        console.log('test')
    }

    return (
        <div className='w-100 h-100' style={{minHeight: '100vh'}}>
            <div className='row page-header'>
                <div className='col-sm-8'>
                    <h2 className='page-title'>Heroes</h2>
                    <div className="page-title-desc">
                        <p className=''>Hire the companion to join your journey!</p>
                    </div>
                </div>
                <div className='col-sm-4 page-action'>
                    <div style={{ display: 'flex' }}>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Search'>
                        </input>
                        <button
                            // onClick={() => searchHandler()}
                            onClick={() => searchHandler()}
                            className='buttonA'><GiMagnifyingGlass /></button>
                        <Link to='/heroes/create' className='buttonA'><GiIronCross /></Link>
                    </div>
                </div>
            </div>
            <div className='page-body' style={{marginBottom: '20px'}}>
                <div className="text-center">
                    <HeroList />
                </div>
            </div>
        </div>
    )
}

export default Hero