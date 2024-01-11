import React from 'react';
import styles from "./MyTodosPage.module.scss";
import { useTodo } from '../context/TodoContext';
import { nanoid } from 'nanoid';
import { useLogin } from '../context/LoginContext';
import axios from 'axios';

function MyTodoHeader() {
    const { addTask, setAddTask, setTodoList, newTodo, setNewTodo } = useTodo();
    const { userObj } = useLogin();

    const handleAddTask = () => setAddTask(true);
    const handleChangeInput = (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    };
    const handleSubmitTask = (event) => {
        event.preventDefault();
        // console.log("submit task");
        if (newTodo) {
            fetchAddTodo(userObj, newTodo);
            setNewTodo("");
            setAddTask(false);
        }
    }
    const fetchAddTodo = async (userObj, newTodo) => {
        try {
            const response = await axios.post('https://express-todo-klut.onrender.com/todo/', {firstname: userObj.firstName, lastname: userObj.lastName, task: newTodo});
            console.log (response);
            setTodoList(curr => [ response.data, ...curr ]);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <header className={styles.MyTodosPage__header}>
            <h1>MyTodo</h1>
            <button onClick={handleAddTask}>New Task</button>
            {addTask? 
                <form>
                    <input onChange={handleChangeInput} value={newTodo}></input>
                    <button type='submit' onClick={handleSubmitTask}>Add Task</button>
                </form>: null}
        </header>
    )
}

export default MyTodoHeader