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

export {
    getClasses
}