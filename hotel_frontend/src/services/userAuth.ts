import { Auth } from "@/models";
import { axiosInstance } from "@/network";
export const login = (data?: any) => {
    if (data)
        return axiosInstance.put<Auth>("/auth/autologin").then(res => res.data);
    return axiosInstance.get<Auth>("/auth/login").then(res => res.data);
}