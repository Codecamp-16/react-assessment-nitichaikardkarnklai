import React from 'react'
import styles from "./LoginPage.module.scss"
import LoginForm from './LoginForm';

function LoginPage() {

  return (
    <main className={styles.LoginPage}>
      <div className={styles.LoginPage__window}>
        <h1>Welcome</h1>
        <LoginForm />
      </div>
    </main>
  )
}

export default LoginPage