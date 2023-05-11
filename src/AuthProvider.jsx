import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const contextProvider = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const registerUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
 }
 const loginUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
 }
 const logoutUser = () =>{
    return signOut(auth)
 }

 useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        return unsubscribe()
    }
 },[])
 
    const authInfo = {
          user, 
          loading,
          registerUser, 
          loginUser,
          logoutUser,

    }
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;