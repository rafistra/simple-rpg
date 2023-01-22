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

const getClassId = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + 'get/' + id,
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': `multipart/form-data`
            }
        });
        // const { id, name, level } = result.data;
        // alert(`Id: ${id}, Name: ${name}, Level: ${level}`);
        cb(result.data);
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

const updateClass = async (id, data) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + 'update/' + id,
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': `multipart/form-data`
            }
        });
    } catch (e) {
        console.log(e);
    }
}

const deleteClass = async id => {
    try {
        let result = await axios({
            method: 'DELETE',
            url: URL + '/delete-class/' + id
        });
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
            url: URL + '/get/' + id
        });
        cb(result.data);
    } catch (e) {
        console.log(e);
    }
}



export {
    getClasses, addClass, getSkills, deleteClass, getSkillById, getClassId, updateClass
}