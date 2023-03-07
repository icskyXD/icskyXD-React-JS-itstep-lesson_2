import axios from "axios"

const apiClientStars = axios.create({
    baseURL: 'https://swapi.dev/api'
})

apiClientStars.interceptors.response.use(
    (response) => {
        console.log('API:', response);
        return response;
    }, 
    (error)=>{
        console.log('API ERROR: ', error);
        return Promise.reject(error);
    }
);

export default apiClientStars;