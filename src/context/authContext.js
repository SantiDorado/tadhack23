import {auth} from "../firebase/firebase.config"
import {createContext, useContext} from "react"

export const authContext = createContext()

export const useAuth = 