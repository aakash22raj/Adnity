// import { User } from "firebase/auth";
import { createContext } from "react";
interface AuthContextType {
    user: null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);