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

const getHeroStats = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: `${URL}/hero-stats/${id}`
        });
        // const { id, name, level } = result.data;
        // alert(`Id: ${id}, Name: ${name}, Level: ${level}`);
        cb(result.data);
    } catch (e) {
        console.log(e);
    }
}

export {
    getHeroes, getHeroStats
}