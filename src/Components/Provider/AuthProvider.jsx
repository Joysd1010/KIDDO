
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [reload, setReload] =useState(0);


    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        });
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
      
      
            if(loggedUser){
                    axios.post('https://kiddo-back-end-joysd1010.vercel.app/jwt',{email:loggedUser?.email})
                    .then(data=>{
                     
                      localStorage.setItem('acces_token',data.data.token)
                      setLoading(false);
                    })
            }
            else{
      
              localStorage.removeItem('acces_token')
              setLoading(false);
      
            }
            // console.log('obser logged', loggedUser)
            setLoading(false);
      
            setUser(loggedUser);
            
          });
        return () =>{
            unsubscribe()
        }
    }, [reload])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        setReload,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
    
           {children}
          
        </AuthContext.Provider>
    );

};

export default AuthProvider;