import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://agencian1.firebaseio.com/'
});

export default instance;