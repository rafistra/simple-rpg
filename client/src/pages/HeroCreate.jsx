import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHero } from '../fetches/heroFetch';
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
        partyId: 2
    });

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

        // addHero(form);
        addHero(formData);
        navigation('/heroes')
    }
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
                <div className='w-75'>
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
                    <div className='mb-3'>
                        <button
                            onClick={() => submitHandler()}
                            className='btn btn-block btn-primary'>Submit</button>
                    </div>

                    <img src={form.image}></img>
                </div>
            </div>
        </div>
    )
}

export default HeroCreate