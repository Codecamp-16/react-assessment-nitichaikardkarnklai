import React from 'react'
import styles from "./TodoItem.module.scss"
import { useTodo } from '../context/TodoContext'
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function TodoItem({ todoItem }) {
    const { todoList, setTodoList } = useTodo();
    const handleEditStatus =() => {
            const foundIndex = todoList.findIndex(el => el.id == todoItem.id);
            const editedObj = {...todoList[foundIndex], status: !todoItem.status};
            const clonedTodoList = [...todoList];
            clonedTodoList.splice(foundIndex, 1, editedObj);
            setTodoList(clonedTodoList);
    }
    const handleDelete = () => {
        const tempNewTodoList = todoList.filter(el => el.id !== todoItem.id);
        setTodoList(tempNewTodoList);
    }
    // console.log(todo);
    return (
        <div className={styles.todoItem}>
            <div className={styles.taskGroup}>
                <div className={styles.checkIcon} onClick={handleEditStatus}>
                    {todoItem.status ? <FontAwesomeIcon className={styles.icon} icon={faCheck} /> : null}
                </div>
                <TodoForm todoItem={todoItem} />
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem