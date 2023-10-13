// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [logged,setLogged]=useState()
    useEffect(()=>{
      if (user) {
        fetch(`https://kiddo-back-end-joysd1010.vercel.app/user/${user?.email}`)
.then(res=>res.json())
.then(data=>{
  setLogged(data)
})
      }



    })
if (logged?.role=='admin') {
  return logged;
}
  

   
    
  };
export default useAdmin;