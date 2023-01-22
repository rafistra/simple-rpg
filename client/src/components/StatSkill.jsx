import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSkillById } from '../fetches/classFetch';
import { getHeroStats } from '../fetches/heroFetch';

const StatSkill = (props) => {
    const [skill, setSkill] = useState({
        name: '',
        image: null,
        skills: [{
            name: '',
            image: '',
            desc: ''
        }]
    });

    const { id } = props;

    useEffect(() => {

        // id = classId;
        console.log(props);
        getSkillById(+id, result => setSkill(result));
        // getSkillById(+classId, result => setSkill(result));
    }, [id]);

    const { name, image, skills } = skill;

    return (
        <div>
            <div className='page-body my-3'>
                <div>
                    <h4 style={{ marginBottom: '20px' }}>Skills </h4>
                </div>
                <div className='row row-cols-2'>
                    {
                        skills.map(skil => {
                            const { name, image, desc } = skil
                            return (
                                <div className='col row row-cols-2'>
                                    <div className='col-sm-2'>
                                        <img src={'http://localhost:3000/static/uploads/' + image} style={{ width: '60px', height: '60px', borderRadius: '10px' }} />
                                    </div>
                                    <div className='col-sm-10'>
                                        <h5>{name}</h5>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default StatSkill