import React, { createContext, useContext, useState } from 'react'

const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [userObj, setUserObj] = useState({});

    return (
        <LoginContext.Provider value={{
            email, setEmail,
            password, setPassword,
            isLogin, setIsLogin,
            userObj, setUserObj
        }}>{children}</LoginContext.Provider>
    )
}

export const useLogin = () => {
    return useContext(LoginContext);
}