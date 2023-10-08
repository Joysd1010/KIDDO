import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import { Dna } from 'react-loader-spinner'


const Privateroute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation()

    if(loading){
        return <div className='flex justify-around'><Dna
        visible={true}
        height="100"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      /></div>
    }

    if(user){
        return children;
       }
       return <Navigate state={{from: location}} to="/login"  replace></Navigate>
    };

export default Privateroute;