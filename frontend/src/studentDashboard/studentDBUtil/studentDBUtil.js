import axios from 'axios';
import jwt from 'jsonwebtoken';

const baseUrl = "http://localhost:3001/student";

axios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



export {getAllJobs}
async function getAllJobs()
{

  return axios.get(baseUrl+'/allJobs');

}