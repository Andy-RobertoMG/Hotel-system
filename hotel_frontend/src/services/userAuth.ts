import { Auth } from "../models";
import axiosInstance from "../network/axiosInstance"



export const login = ()=>{
    return axiosInstance.get<Auth>("/auth/autologin").then(res => res.data);    
}