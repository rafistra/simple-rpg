import axios from 'axios';

const URL = 'http://localhost:3000/parties/';
const token = localStorage.getItem('access_token');

const getPartiesWithHeroes = async cb => {
    try {
        let parties = await axios({
            method: 'GET',
            url: URL + 'heroes',
            headers: {
                access_token: token
            }
        });
        cb(parties.data);
    } catch (e) {
        console.log(e);
    }
}

const getParties = async cb => {
    try {

    } catch (e) {
        console.log(e);
    }
}

export {
    getPartiesWithHeroes
}