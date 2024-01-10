import React from 'react'
import { useLogin } from '../context/LoginContext';
import styles from "./LoginForm.module.scss"
import axios from 'axios';

function LoginForm() {
    const { email, setEmail, password, setPassword} = useLogin();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        setEmail("");
        setPassword("");
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
            <input onChange={handleChangePassword} value={password}></input>
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default LoginForm