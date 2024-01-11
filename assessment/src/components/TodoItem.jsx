import React, { useEffect } from 'react'
import styles from "./TodoItem.module.scss"
import { useTodo } from '../context/TodoContext'
import { useLogin } from '../context/LoginContext';
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


function TodoItem({ todoItem }) {
    const { todoList, setTodoList } = useTodo();

    const handleEditStatus = () => {
        fetchEditStatus(todoItem);
        const foundIndex = todoList.findIndex(el => el.id == todoItem.id);
        const editedObj = { ...todoList[foundIndex], status: !todoItem.status };
        const clonedTodoList = [...todoList];
        clonedTodoList.splice(foundIndex, 1, editedObj);
        setTodoList(clonedTodoList);
    }
    const fetchEditStatus = async ( todoItem) => {
        try {
            console.log (todoItem.id);
            const response = await axios.patch(`https://express-todo-klut.onrender.com/todo/update/${todoItem.id}`, {status: !todoItem.status});
            console.log (response);
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = () => {
        const tempNewTodoList = todoList.filter(el => el.id !== todoItem.id);
        setTodoList(tempNewTodoList);

        fetchDeleteTodo(todoItem);
    }
    // console.log(todo);
    const fetchDeleteTodo = async ( todoItem ) => {
        try {
            console.log (todoItem.id);
            const response = await axios.delete(`https://express-todo-klut.onrender.com/todo/delete/${todoItem.id}`);
            console.log (response);
        } catch (err) {
            console.log(err);
        }
    }
  
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