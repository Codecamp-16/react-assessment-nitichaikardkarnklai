import React from 'react'
import styles from "./MyTodosPage.module.scss"

function MyTodoHeader() {

    return (
        <header className={styles.MyTodosPage__header}>
            <h1>MyTodo</h1>
            <button>New Task</button>
        </header>
    )
}

export default MyTodoHeader