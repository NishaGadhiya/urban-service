import { useEffect, useState } from "react"
import { Login } from "../component/Login"
import { Outlet } from "react-router-dom"

const useAuth = ()=>{
    const [isAuthenticated,setisAuthenticated] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem("id") !=null){
            setisAuthenticated(true) 
        }
    },[])

    return isAuthenticated;

}



export const ProtectedRoutes = ()=>{
    const auth = useAuth()
    console.log("Auth....",auth)

    return auth == true?<Outlet/>:<Login/>
}