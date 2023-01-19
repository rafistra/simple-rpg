import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHero, addHeroStats } from '../fetches/heroFetch';
import { getClasses } from '../fetches/classFetch';

const HeroCreate = () => {
    const [classes, setClasses] = useState([])
    const [getClassTrigger, setGetClassTrigger] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigation = useNavigate();

    const [form, setForm] = useState({
        name: '',
        level: 0,
        image: null,
        classId: 0,
        partyId: 2,
    });

    const [formStats, setFormStats] = useState({
        hp: 50,
        mgc: 50,
        stam: 50,
        str: 50,
        def: 50,
        int: 50,
        dex: 50,
        char: 50,
    })

    useEffect(() => {
        getClasses(result => setClasses(result));
    }, [getClassTrigger]);

    const submitHandler = () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('level', form.level);
        formData.append('image', form.image);
        formData.append('classId', form.classId);
        // formData.append('partyId', form.partyId);

        formData.append('hp', formStats.hp);
        formData.append('mgc', formStats.mgc);
        formData.append('stam', formStats.stam);
        formData.append('str', formStats.str);
        formData.append('def', formStats.def);
        formData.append('int', formStats.int);
        formData.append('dex', formStats.dex);
        formData.append('char', formStats.char);

        // addHero(form);
        addHero(formData);
        navigation('/heroes')
        // window.location.reload(true)
    }

    let startingPoints = 3200;
    let statPoints = (Number(formStats.hp) + Number(formStats.mgc) + Number(formStats.stam) + Number(formStats.str) + Number(formStats.def) + Number(formStats.int) + Number(formStats.dex) + Number(formStats.char));
    let needPoints = startingPoints - statPoints;
    return (
        <div className='w-100 h-100'>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>Create Your own Compaion</h2>
                    <div className="page-title-desc">
                        <p className=''>Forge your powerful warrior!</p>
                    </div>
                </div>
            </div>
            <div className='page-body'>
                <div>
                    <h4 className='mb-3'>Basic Information</h4>
                </div>
                <div className='w-100'>
                    <div className='mb-3'>
                        <label>Name: </label>
                        <input
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type='text'
                            className='form-control'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Image: </label>
                        <input
                            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                            type='file'
                            className='form-control'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Level: </label>
                        <input
                            onChange={(e) => setForm({ ...form, level: e.target.value })}
                            type='text'
                            className='form-control'>
                        </input>
                    </div>
                    <div className='row'>
                        <label>Class: </label>
                        {
                            classes.map(clas => {
                                const { id, name } = clas
                                return (
                                    <div className='mb-3 col'>
                                        <input
                                            name="inlineRadioOptions" id={id}
                                            className="form-check-input"
                                            type="radio"
                                            value={id}
                                            onChange={(e) => setForm({ ...form, classId: e.target.value })} />
                                        <label className="form-check-label" for="inlineRadio1">{name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='page-body' style={{ marginTop: '20px' }}>
                <div>
                    <h4 className='mb-3'>Attributes</h4>
                </div>
                <div className='w-100'>
                    <div className='mb-3'>
                        <label>Points Left: {needPoints}</label>
                    </div>
                    <div className='mb-3'>

                    </div>
                    <div className='mb-3'>
                        <label>Health: {formStats.hp}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, hp: (e.target.value) })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Magic: {formStats.mgc}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, mgc: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Stamina: {formStats.stam}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, stam: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Strength: {formStats.str}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, str: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Defensive: {formStats.def}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, def: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Intelligence: {formStats.int}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, int: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Dexterity: {formStats.dex}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, dex: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Charisma: {formStats.char}</label>
                        <input
                            onChange={(e) => setFormStats({ ...formStats, char: e.target.value })}
                            type='range'
                            className='form-control'
                            min='50'
                            max={needPoints}
                            step='1'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <button
                            onClick={() => submitHandler()}
                            className='btn btn-block btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCreate