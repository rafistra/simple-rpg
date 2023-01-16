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
    const newHp = heroStat.hp / 20;
    const newSta = heroStat.stam / 20;
    const newMgc = heroStat.mgc / 20;

    const newStr = heroStat.str / 20;
    const newDef = heroStat.def / 20;
    const newInt = heroStat.int / 20;
    const newDex = heroStat.dex / 20;
    const newChar = heroStat.char / 20;



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
                    <div className='col'>
                        <div className='player-img'>
                            <img src={'http://localhost:3000/static/uploads/' + image} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h4 style={{marginBottom: '20px'}}>Attributes</h4>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Health</div>
                            <div className='col-sm-7'>
                                <div className="progress stat-bar-bg">
                                    <div className="progress-bar bg-danger stat-bar" role="progressbar" style={{ width: `${newHp}%` }} aria-valuenow={newHp} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.hp}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Stamina</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${newSta}%` }} aria-valuenow={newSta} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.stam}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Magic</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${newMgc}%` }} aria-valuenow={newMgc} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.mgc}</div>
                        </div>
                        <div className='my-3'>

                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Strength</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${newStr}%` }} aria-valuenow={newStr} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.str}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Defense</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${newDef}%` }} aria-valuenow={newDef} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.def}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Intelligence</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${newInt}%` }} aria-valuenow={newInt} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.int}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Dexterity</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${newDex}%` }} aria-valuenow={newDex} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.dex}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Charisma</div>
                            <div className='col-sm-7'>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${newChar}%` }} aria-valuenow={newChar} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.char}</div>
                        </div>
                    </div>
                    <div className='col'>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroStats;