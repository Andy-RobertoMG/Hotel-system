import axios from "axios";
const axiosInstance = axios.create({
    baseURL:import.meta.env.PORT,
    timeout:5000,
    withCredentials:true,
})
export default axiosInstance;