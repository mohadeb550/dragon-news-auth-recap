import { useState } from "react";
import { createContext } from "react"
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from "react";


export const AuthContext = createContext(null);
const auth = getAuth(app);



export default function AuthProvider({children}) {
    const [ user , setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // create user with email & password 
    const createUser = (email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email & password manually
    const signIn = (email, password ) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }

    // user observer function 

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    // log-out handler 
    const logOut = () =>{
        setLoading(true)
       const promise = signOut(auth)
       return promise;
    }


    const authInfo = { user , createUser , logOut , signIn , loading }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
