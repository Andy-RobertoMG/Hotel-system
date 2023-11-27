import { ReactNode, useState } from "react"
import { AppContext } from "./AppContext"
import { Auth } from "@/models"
export type StateAppProps = {
    children:ReactNode
}
const StateApp:React.FC<StateAppProps> = ({children}):ReactNode=>{
    const [authentication,setAuthentication] = useState<Auth>(
        {
            rol:"default",
            isAuthenticated:false
        }
    );
    
    return (
        <AppContext.Provider value={{Auth:authentication,setAuth:setAuthentication}}>
            {children}
        </AppContext.Provider>
    ); 
}
export default StateApp;