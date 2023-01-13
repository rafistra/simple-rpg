import React, { useState, useEffect } from 'react';
import { getHeroes, getHeroStats } from '../fetches/heroFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Stat.css'
import { useParams } from 'react-router-dom';
import Chart from 'chart.js/auto';


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

    const chartAttribs = {
        type: 'radar',
        data: radar,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    const radar = {
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [heroStat.str, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    return (
        <div className='w-100 h-100'>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>{name}'s Status</h2>
                    <div className="page-title-desc">
                        <p className=''>Forge your powerful warrior { }!</p>
                    </div>
                </div>
            </div>
            <div className='page-body'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='player-img'>
                            <img src={'http://localhost:3000/static/uploads/' + image} alt="" />
                        </div>
                    </div>
                    <div className='col-sm-8 row'>
                        <div>
                            <h4>{name}'s Stats</h4>
                        </div>
                        <div className='row align-top'>
                            <div className='col-sm-6 text-start '>
                                Hahaha
                            </div>
                            <div className='col-sm-6 align-top' >
                                <div>
                                    <Chart
                                    >{chartAttribs}</Chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroStats;