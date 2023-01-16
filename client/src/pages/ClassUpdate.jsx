import React, { useState, useEffect } from 'react'
import { updateClass, getClassId, getSkills } from '../fetches/classFetch';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ClassUpdate = () => {
    const [skills, setSkills] = useState([])
    const [getSkillTrigger, setGetSkillTrigger] = useState(true);
    const params = useParams();
    const navigation = useNavigate();
    const { id } = params;

    const [form, setForm] = useState({
        name: '',
        image: null,
        skillId1: 0,
        skillId2: 0,
        skillId3: 0,
        skillId4: 0,
    });

    useEffect(() => {
        getClassId(+id, result => setForm({
            name: result.name,
            level: result.level,
            image: result.image,
        }));
    }, [id]);

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

        updateClass(+id, formData);
        console.log(formData)
        navigation('/classes')
      }

    return (
        <div className='w-100 h-100'>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>Modify Class</h2>
                    <div className="page-title-desc">
                        <p className=''>Change class attributes</p>
                    </div>
                </div>
            </div>
            <body className='page-body'>
                <div className='w-100'>
                    <div className='mb-3'>
                        <label>Class Name: </label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type='text'
                            className='form-control'>
                        </input>
                    </div>
                    <div className='mb-3'>
                        <label>Image: </label>
                        <input
                            // value={form.image}
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
                                    <option value={form.skillId1} selected>Change Skill</option>
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
                                    <option value={form.skillId2} selected>Change Skill</option>
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
                                    <option value={form.skillId3} selected>Change Skill</option>
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
                                    <option value={form.skillId4} selected>Change Skill</option>
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

export default ClassUpdate