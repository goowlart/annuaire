import axios from 'axios';

export const http = axios.create({
    baseURL:'http://moka-api.okservice.fr/web/exercices/'
})