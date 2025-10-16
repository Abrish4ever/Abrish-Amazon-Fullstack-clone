import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://abrish-amazon-fullstack-clone.onrender.com",
  //   baseURL: "http://127.0.0.1:5001/clone-8d549/us-central1/api",
});

export {axiosInstance};