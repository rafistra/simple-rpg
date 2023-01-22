import React, { useState, useEffect } from 'react'
import { getSkills, addClass } from '../../fetches/classFetch';
import { useNavigate } from 'react-router-dom';

const ClassCreate = () => {
    const [skills, setSkills] = useState([])
    const [getSkillTrigger, setGetSkillTrigger] = useState(true);
    const navigation = useNavigate();

    const [form, setForm] = useState({
        name: '',
        image: null,
        skillId1: 0,
        skillId2: 0,
        skillId3: 0,
        skillId4: 0,
    })

    useEffect(() => {
        getSkills(result => setSkills(result));

    }, [getSkillTrigger]);

    const submitHandler = () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('image', form.image);
        formData.append('skillId1', form.skillId1);
        formData.append('skillId2', form.skillId2);
        formData.append('skillId3', form.skillId3);
        formData.append('skillId4', form.skillId4);

        addClass(formData);
        navigation('/classes')
        // window.location.reload(true)
    }

    return (
        <div className='w-100 h-100' style={{minHeight: '100vh'}}>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>Create Custom Class</h2>
                    <div className="page-title-desc">
                        <p className=''>Build your playing style</p>
                    </div>
                </div>
            </div>
            <body className='page-body'>
                <div className='w-100'>
                    <div className='mb-3'>
                        <label>Class Name: </label>
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
                        <label>Skills: </label>
                        <div className='row row-cols-4 justify-content-between'>
                            <div className='col'>
                                <select
                                    onChange={(e) => setForm({ ...form, skillId1: e.target.value })}
                                    className=" form-select form-select-lg mb-3"
                                    style={{ fontSize: '14px' }}
                                    aria-label=".form-select-lg example" >
                                    <option selected>Select Skill</option>
                                    {
                                        skills.map(skill => {
                                            const { id, name, image, desc } = skill
                                            return (
                                                <option
                                                    key={id}
                                                    value={id}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom"
                                                    title={desc}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col'>
                                <select
                                    onChange={(e) => setForm({ ...form, skillId2: e.target.value })}
                                    className=" form-select form-select-lg mb-3"
                                    style={{ fontSize: '14px' }}
                                    aria-label=".form-select-lg example">
                                    <option selected>Select Skill</option>
                                    {
                                        skills.map(skill => {
                                            const { id, name, image, desc } = skill
                                            return (
                                                <option value={id} data-bs-toggle="tooltip" data-bs-placement="bottom" title={desc}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col '>
                                <select
                                    onChange={(e) => setForm({ ...form, skillId3: e.target.value })}
                                    className=" form-select form-select-lg mb-3"
                                    style={{ fontSize: '14px' }}
                                    aria-label=".form-select-lg example">
                                    <option selected>Select Skill</option>
                                    {
                                        skills.map(skill => {
                                            const { id, name, image, desc } = skill
                                            return (
                                                <option value={id} data-bs-toggle="tooltip" data-bs-placement="bottom" title={desc}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col'>
                                <select
                                    onChange={(e) => setForm({ ...form, skillId4: e.target.value })}
                                    className=" form-select form-select-lg mb-3"
                                    style={{ fontSize: '14px' }} 
                                    aria-label=".form-select-lg example">
                                    <option selected>Select Skill</option>
                                    {
                                        skills.map(skill => {
                                            const { id, name, image, desc } = skill
                                            return (
                                                <option value={id} data-bs-toggle="tooltip" data-bs-placement="bottom" title={desc}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <button
                            onClick={() => submitHandler()}
                            className='btn btn-block btn-primary'>Submit</button>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ClassCreate