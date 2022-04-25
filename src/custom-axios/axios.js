import axios from "axios";

const instance = axios.create({
    baseURL : 'https://mylibraryemt.herokuapp.com/',
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})
export default instance;