import { Navigate } from "react-router-dom"

export default function PrivateRoute({isloggedin,children}){

    if(isloggedin){
        return children
    //  Matlab agar logged in hai toh dashborad par navigate kar saketke hai else wapis login page par redirect ho jao   
    }
    else{
       return <Navigate to="/login"/>
    }

}