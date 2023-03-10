import axios from 'axios';
import Swal from 'sweetalert2';

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
            url: URL + '/hero-stats/' + id,
            headers: {
                access_token: token
            }
        });
        // const { id, name, level } = result.data;
        // alert(`Id: ${id}, Name: ${name}, Level: ${level}`);
        cb(result.data);
    } catch (e) {
        console.log(e);
    }
}

const searchHero = async (cb) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

const register = async hero => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/registration',
            data: hero,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        // cb(result.data);
        console.log(result.data);
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
                'Content-Type': 'multipart/form-data'
            }
        });
        // cb(result.data);
        console.log(result.data);
    } catch (e) {
        console.log(e);
    }
}

const addHeroStats = async hero => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/add-stats/',
            data: hero,
            headers: {

            }
        });
        console.log(result.data);
    } catch (e) {
        console.log(e);
    }
}

const updateHero = async (id, hero) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: hero,
            headers: {
                'Accept': 'application/json',
                'Content-Type': `multipart/form-data`
            }
        });
    } catch (e) {
        console.log(e);
    }
}

const removeHero = async id => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, kill it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete-hero/' + id
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
            window.location.reload(true)
        })

    } catch (e) {
        console.log(e);
    }
}

export {
    getHeroes, getHeroStats, addHero, addHeroStats, removeHero, searchHero, getPlayer, updateHero, register
}