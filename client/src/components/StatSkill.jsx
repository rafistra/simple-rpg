import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSkillById } from '../fetches/classFetch';

const StatSkill = (props) => {
    const params = useParams();

    const [skill, setSkill] = useState({
        name: undefined,
        image: null || 'placeholder.png',
        skills: [{
            name: '' || 'name',
            image: '' || 'placeholder.png',
            desc: '' || 'desc'
        }]
    });

    useEffect(() => {
        const { classId } = props
        console.log(classId);
        getSkillById(3, result => setSkill(result));
        // getSkillById(+classId, result => setSkill(result));
    }, []);

    const { name, image, skills } = skill;

    return (
        <div>
            <div className='page-body my-3'>
                <div className='row'>
                    {
                        skills.map(skil => {
                            const { name, image, desc } = skil
                            return(
                                <div className='col'>
                                    <img src={'http://localhost:3000/static/uploads/' + image} style={{width: '50px', height: '50px'}}/>
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