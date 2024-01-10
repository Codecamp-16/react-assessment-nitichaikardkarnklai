import React from 'react'
import styles from "./TodoItem.module.scss"

function TodoItem({ todo }) {
    console.log(todo);
    return (
        <div className={styles.todoItem}>
            <h2>{todo}</h2>
            <div className={styles.buttonGroup}>
                <button>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem