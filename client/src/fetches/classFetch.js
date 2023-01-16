import axios from 'axios';

const URL = 'http://localhost:3000/classes/';
const token = localStorage.getItem('access_token');

const getClasses = async cb => {
    try {
        let classes = await axios({
            method: 'GET',
            url: URL,
            // headers: {
            //     access_token: token
            // }
        });
        cb(classes.data);
    } catch (e) {
        console.log(e);
    }
}

const addClass = async data => {
    try {
        let clas = await axios({
            method: 'POST',
            url: URL + 'add-class',
            data: data,
            headers: {   
                'Accept': 'application/json',
                'Content-Type': `multipart/form-data`
            }
        })
        console.log(clas)
    } catch (e) {
        console.log(e);
    }
}

const getSkills = async cb => {
    try {
        let skills = await axios({
            method: 'GET',
            url: URL + 'skills',
        });
        cb(skills.data)
    } catch (e) {
        console.log(e);
    }
}

const getSkillById = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + '/skill/' + id
        });
        cb(result.data);
    } catch (e) {
        console.log(e);
    }
}

const addClassSkill1 = async cb => {
    try {
        
    } catch (e) {
        console.log(e)
    }
}

export {
    getClasses, addClass, getSkills, addClassSkill1, getSkillById
}