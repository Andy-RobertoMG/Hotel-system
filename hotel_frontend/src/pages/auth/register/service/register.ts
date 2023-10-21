import axiosInstance from "../../../../network/axiosInstance"
import { user } from "../models"

export const register = (data:user)=>{
    return axiosInstance.post("/auth/register",data).then(res=>res.data);
}