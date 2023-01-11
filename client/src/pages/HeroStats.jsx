import React, { useState, useEffect } from 'react';
import { getHeroes, getHeroStats } from '../fetches/heroFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Stat.css'
import { useParams } from 'react-router-dom';

const HeroStats = () => {
    const params = useParams();
    const [stat, setStat] = useState({
        name: '',
        level: '',
        class: {
            name: ''
        },
        heroStat: {
            hp: 0,
            mgc: 0,
            stam: 0,
            str: 0,
            def: 0,
            int: 0,
            dex: 0,
            char: 0
        }
    });

    useEffect(() => {
        const { id } = params;
        getHeroStats(+id, result => setStat(result));
    }, []);
    const vocation = stat.class;

    const { name, level, image, heroStat } = stat;
    // const { str } = HeroStat;
    

    return (
        <div>
            <h2 className='page-title'>{name}'s Profile</h2>
            <p className='page-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos vero ipsam laudantium quo libero aut non ut esse odio et eligendi fugit, blanditiis necessitatibus fugiat qui officiis rerum.</p>
            <div className='stat-body'>
                <div className="row">
                    <div className='col-4'>
                        <img src={image} className='stat-img' />
                    </div>

                    <div className='col-8'>
                        <h4>Stats</h4>
                        <p>{vocation.name}</p>
                        <p>{heroStat.hp}</p>
                        <p>{heroStat.mgc}</p>
                        <p>{heroStat.stam}</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default HeroStats;