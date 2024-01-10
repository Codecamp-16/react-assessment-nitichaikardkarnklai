import React, { createContext, useContext, useState } from 'react'
import axios from "axios";

const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [userObj, setUserObj] = useState({});
    const [token, setToken] = useState({});

    const fetchAllTodo = async () => {
        // console.log(userObj);
        try {
            const response = await axios.get(`https://express-todo-klut.onrender.com/todo/?firstname=${userObj.firstName}&lastname=${userObj.lastName}`);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    const getMe = async () => {
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDMzOGZlZS03Yjc1LTRhNjUtOTgwMi0wNmU1Y2UyMjU4NzciLCJpYXQiOjE3MDQ4NzkzMzYsImV4cCI6MTcwNDk2NTczNn0.-JYz26-jA9APWVFo9cTTOVI3OhD63lg03IjPJ7oPB10"; // get token from somewhere
        const res = await fetch('https://paybox-wnfo.onrender.com/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`, // put your token here
            },
        });
        const data = await res.json();
        // console.log(data.user ,"user");
        setUserObj(data.user);
    }


    return (
        <LoginContext.Provider value={{
            email, setEmail,
            password, setPassword,
            isLogin, setIsLogin,
            userObj, setUserObj, 
            fetchAllTodo, getMe, 
            token, setToken
        }}>{children}</LoginContext.Provider>
    )
}

export const useLogin = () => {
    return useContext(LoginContext);
}