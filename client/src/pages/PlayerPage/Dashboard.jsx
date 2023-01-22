import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroList from '../../components/HeroList';
import { getPlayer } from '../../fetches/heroFetch';
import '../../styles/Dashboard.css';
import { useParams } from 'react-router-dom';
import StatSkill from '../../components/StatSkill';

const Dashboard = () => {
    const params = useParams();
    // const [class, setClass] = useState()
    // const [getClassTrigger, setGetClassTrigger] = useState(true);

    const [stat, setStat] = useState({
        id: 0,
        name: '',
        level: '',
        classId : 1,
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
        getPlayer(result => setStat(result));
    }, []);

    const vocation = stat.class;

    const { name, level, image, heroStat, classId } = stat;
    
    // const { nam } = clas
    // const { str } = HeroStat;
    const newHp = heroStat.hp / 10;
    const newSta = heroStat.stam / 10;
    const newMgc = heroStat.mgc / 10;

    const newStr = heroStat.str / 10;
    const newDef = heroStat.def / 10;
    const newInt = heroStat.int / 10;
    const newDex = heroStat.dex / 10;
    const newChar = heroStat.char / 10;
    localStorage.setItem("playerId", stat.id);

    return (
        <div className='w-100' style={{height: '100vh'}}>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>{name}'s Status</h2>
                    <div className="page-title-desc">
                        <p className=''>{vocation.name}</p>
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
                            <h4 style={{ marginBottom: '20px' }}>Attributes </h4>
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
                                <div className="progress stat-bar-bg">
                                    <div className="progress-bar bg-success stat-bar" role="progressbar" style={{ width: `${newSta}%` }} aria-valuenow={newSta} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.stam}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-sm-3 text-start'>Magic</div>
                            <div className='col-sm-7'>
                                <div className="progress stat-bar-bg">
                                    <div className="progress-bar bg-primary stat-bar" role="progressbar" style={{ width: `${newMgc}%` }} aria-valuenow={newMgc} aria-valuemin='0' aria-valuemax='100'></div>
                                </div>
                            </div>
                            <div className='col-sm-2 text-end'>{heroStat.mgc}</div>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '20px', marginTop: '20px' }}></h4>
                            <div className='row row-col-4'>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h4 style={{ marginBottom: '20px' }}>Stat Details</h4>
                            <div className='row my-2'>
                                <div className='col-sm-3 text-start'>Strength</div>
                                <div className='col-sm-7'>
                                    <div className="progress stat-bar-bg">
                                        <div className="progress-bar bg-info stat-bar" role="progressbar" style={{ width: `${newStr}%` }} aria-valuenow={newStr} aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </div>
                                <div className='col-sm-2 text-end'>{heroStat.str}</div>
                            </div>
                            <div className='row my-2'>
                                <div className='col-sm-3 text-start'>Defense</div>
                                <div className='col-sm-7'>
                                    <div className="progress stat-bar-bg">
                                        <div className="progress-bar bg-info stat-bar" role="progressbar" style={{ width: `${newDef}%` }} aria-valuenow={newDef} aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </div>
                                <div className='col-sm-2 text-end'>{heroStat.def}</div>
                            </div>
                            <div className='row my-2'>
                                <div className='col-sm-3 text-start'>Intelligence</div>
                                <div className='col-sm-7'>
                                    <div className="progress stat-bar-bg">
                                        <div className="progress-bar bg-info stat-bar" role="progressbar" style={{ width: `${newInt}%` }} aria-valuenow={newInt} aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </div>
                                <div className='col-sm-2 text-end'>{heroStat.int}</div>
                            </div>
                            <div className='row my-2'>
                                <div className='col-sm-3 text-start'>Dexterity</div>
                                <div className='col-sm-7'>
                                    <div className="progress stat-bar-bg">
                                        <div className="progress-bar bg-info stat-bar" role="progressbar" style={{ width: `${newDex}%` }} aria-valuenow={newDex} aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </div>
                                <div className='col-sm-2 text-end'>{heroStat.dex}</div>
                            </div>
                            <div className='row my-2'>
                                <div className='col-sm-3 text-start'>Charisma</div>
                                <div className='col-sm-7'>
                                    <div className="progress stat-bar-bg">
                                        <div className="progress-bar bg-info stat-bar" role="progressbar" style={{ width: `${newChar}%` }} aria-valuenow={newChar} aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </div>
                                <div className='col-sm-2 text-end'>{heroStat.char}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StatSkill id={stat.classId}></StatSkill>
        </div>
    )
}

export default Dashboard