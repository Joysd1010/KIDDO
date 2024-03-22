import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
 
  const currentUser = useAuth().user;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      fetch(`https://kiddo-back-end.vercel.app/user/${currentUser?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.role === "admin"); 
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setIsAdmin(false); 
        });
    } else {
      setIsAdmin(false); 
    }
    
  }, [currentUser]); 
 
  return isAdmin;
};

export default useAdmin;
