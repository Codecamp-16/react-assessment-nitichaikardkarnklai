import React from 'react';
import styles from "./MyTodosPage.module.scss";
import { useTodo } from '../context/TodoContext';
import { nanoid } from 'nanoid';

function MyTodoHeader() {
    const { addTask, setAddTask, setTodoList, newTodo, setNewTodo } = useTodo();

    const handleAddTask = () => setAddTask(true);
    const handleChangeInput = (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    };
    const handleSubmitTask = (event) => {
        event.preventDefault();
        // console.log("submit task");
        if (newTodo) {
            const newTodoObj = {
                todo: newTodo,
                id: nanoid(),
                status: false
            }
            setTodoList(curr => [newTodoObj, ...curr]);
            setNewTodo("");
            setAddTask(false);
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