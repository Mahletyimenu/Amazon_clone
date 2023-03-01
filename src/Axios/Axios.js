import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/fir-cdddd/us-central1/api' //API for cloud function 
});

export default instance;