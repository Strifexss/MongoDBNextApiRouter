import React, { ReactNode, createContext } from "react";

interface AuthContextProps {
    FunctionLogar: () => void
}

const AuthContext = createContext<AuthContextProps>({
    FunctionLogar: () => {
        console.log("Logou!")
    }
});

const AuthProvider = (children: ReactNode) => {

}

export { AuthContext, AuthProvider };