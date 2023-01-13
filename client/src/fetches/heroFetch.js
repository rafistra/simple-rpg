import axios from 'axios';

const URL = 'http://localhost:3000/heroes';
const token = localStorage.getItem('access_token');

const getHeroes = async cb => {
    try {
        let heroes = await axios({
            method: 'GET',
            url: URL,
            headers: {
                access_token: token
            }
        });
        cb(heroes.data);
    } catch (e) {
        console.log(e);
    }
}

const getPlayer = async cb => {
    try {
        let heroes = await axios({
            method: 'GET',
            url: URL + '/hero-player/',
            headers: {
                access_token: token
            }
        });
        // console.log(heroes.data)
        cb(heroes.data);
    } catch (e) {
        console.log(e);
    }
}

const getHeroStats = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + '/hero-stats/' + id
        });
        // const { id, name, level } = result.data;
        // alert(`Id: ${id}, Name: ${name}, Level: ${level}`);
        cb(result.data);
    } catch (e) {
        console.log(e);
    }
}

const searchHero = async (cb) => {
    try{

    } catch (e) {
        console.log(e);
    }
}

const addHero = async hero => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/add-hero',
            data: hero,
            headers: {
                'Accept': 'application/json',
                'Content-Type': `multipart/form-data`
            }
        });
        // cb(result.data);
        console.log(result.data);
    } catch (e) {
        console.log(e);
    }
}

const removeHero = async id => {
    try {
        let result = await axios({
            method: 'DELETE',
            url: URL + '/delete-hero/' + id
        });

    } catch (e) {
        console.log(e);
    }
}

export {
    getHeroes, getHeroStats, addHero, removeHero, searchHero, getPlayer
}