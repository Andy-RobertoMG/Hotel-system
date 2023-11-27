import { Auth } from "@/models";
import { Dispatch, SetStateAction, createContext } from "react";
type AppContextType ={
    Auth:Auth;
    setAuth: Dispatch<SetStateAction<Auth>>;
}
const defaultState = {
    Auth:{
        rol:"default",
        isAuthenticated:false
    },
    setAuth: ():void =>{}
} as AppContextType;
export const AppContext = createContext<AppContextType>(defaultState);