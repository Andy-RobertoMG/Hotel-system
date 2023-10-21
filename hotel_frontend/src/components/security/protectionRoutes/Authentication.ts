
interface Authentication{
    isAuthenticated:boolean;
}
export interface ProtectionRoute{
    auth: Authentication;
    children: React.ReactNode;
    isAllowed:boolean;
    redirectTo:string;
}