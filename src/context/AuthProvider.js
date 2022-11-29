import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //creating new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sign out user
    const logOut = () => {
        return signOut(auth)
    }

    //observer for the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user Observing');
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;