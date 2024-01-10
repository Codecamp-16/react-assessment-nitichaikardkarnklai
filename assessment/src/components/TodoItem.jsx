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
    const { userObj, setUserObj } = useLogin();

    const handleEditStatus = () => {
        const foundIndex = todoList.findIndex(el => el.id == todoItem.id);
        const editedObj = { ...todoList[foundIndex], status: !todoItem.status };
        const clonedTodoList = [...todoList];
        clonedTodoList.splice(foundIndex, 1, editedObj);
        setTodoList(clonedTodoList);
    }
    const handleDelete = () => {
        const tempNewTodoList = todoList.filter(el => el.id !== todoItem.id);
        setTodoList(tempNewTodoList);
    }
    // console.log(todo);
    
    // const fetchAllTodo = async () => {
    //     console.log(userObj);
    //     try {
    //         const response = await axios.get(`https://express-todo-klut.onrender.com/todo/?firstname=${userObj.firstName}&lastname=${userObj.lastName}`);
    //         // console.log(response);
    //     } catch (err) {
    //         console.log("err");
    //     }
    // }

    // const getMe = async () => {
    //     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDMzOGZlZS03Yjc1LTRhNjUtOTgwMi0wNmU1Y2UyMjU4NzciLCJpYXQiOjE3MDQ4NzkzMzYsImV4cCI6MTcwNDk2NTczNn0.-JYz26-jA9APWVFo9cTTOVI3OhD63lg03IjPJ7oPB10"; // get token from somewhere
    //     const res = await fetch('https://paybox-wnfo.onrender.com/auth/me', {
    //         headers: {
    //             Authorization: `Bearer ${token}`, // put your token here
    //         },
    //     });
    //     const data = await res.json();
    //     console.log(data.user);
    //     setUserObj(data.user);
    // }

    // useEffect(() => {
    //     getMe();
    //     fetchAllTodo();
    // }, [])

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