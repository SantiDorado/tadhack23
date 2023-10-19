import React from "react";
import {auth} from "../firebase/firebase.config"
import {createContext, useContext} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        console.log("error creating auth context")
    }
    return context;
};

export function AuthProvider({children}) {
    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(email, password)
        console.log(response)
    }
    return <authContext.Provider>{children}</authContext.Provider>
}