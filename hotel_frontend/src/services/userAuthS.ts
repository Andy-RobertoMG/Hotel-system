import axiosInstance from "../network/axiosInstance"



export const login = ()=>{
    return axiosInstance.get("/auth/autologin");    
}