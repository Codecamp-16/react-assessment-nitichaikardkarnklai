import React from 'react'
import { useLogin } from '../context/LoginContext';
import styles from "./LoginForm.module.scss"
import axios from 'axios';

// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDMzOGZlZS03Yjc1LTRhNjUtOTgwMi0wNmU1Y2UyMjU4NzciLCJpYXQiOjE3MDQ4Nzg2MjYsImV4cCI6MTcwNDk2NTAyNn0.S9wHN0OlElYI7fRjBSOuiL6btH0rvEVGM0P-VqnulQE",
//   "user": {
//       "id": "f0338fee-7b75-4a65-9802-06e5ce225877",
//       "firstName": "Im",
//       "lastName": "Nerb",
//       "email": "imnerb@gmail.com",
//       "mobile": null
//       "password": "passworddd"
//   }
// }

function LoginForm() {
    const { email, setEmail, password, setPassword, setIsLogin} = useLogin();
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchLogin();
        setEmail("");
        setPassword("");
    }
    const fetchLogin = async () => {
        const loginObj = {emailOrMobile: email, password: password};
        try{
            const response = await axios.post("https://paybox-wnfo.onrender.com/auth/login", loginObj);
            if (response.status == 200) {
                setIsLogin(true);
            } else {
                alert("login failed: username of password is incorrect");
            }
            console.log (response.status);
        } catch (err) {
            console.log(err);
            alert("login failed: username of password is incorrect");
        }
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    return (
        <form className = {styles.LoginForm} onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={handleChangeEmail} value={email}></input>
            <label>Password</label>
            <input type="password" onChange={handleChangePassword} value={password}></input>
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default LoginForm