import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import styles from "./TodoForm.module.scss"
import axios from 'axios';

function TodoForm({todoItem}) {
    const [isEdit, setIsEdit] = useState(false); 
    const [edit, setEdit] = useState("");
    const { todoList, setTodoList } = useTodo();

    const handleEdit = () => {
        setIsEdit(true);
        setEdit(todoItem.task);
    }
    const handleTypingEdit = (event) => {
        setEdit(event.target.value);
    };
    const handleEditSubmit = (event) => {
        event.preventDefault();
        if (edit) {
            fetchEditTodo(todoItem, edit);
            
            const foundIndex = todoList.findIndex(el => el.id == todoItem.id);
            const editedObj = { ...todoList[foundIndex], task: edit };
            const clonedTodoList = [...todoList];
            clonedTodoList.splice(foundIndex, 1, editedObj);
            setTodoList(clonedTodoList);
            setIsEdit(false);
        }
    }
    const fetchEditTodo = async ( todoItem, edit) => {
        try {
            console.log (todoItem.id);
            const response = await axios.patch(`https://express-todo-klut.onrender.com/todo/update/${todoItem.id}`, {task: edit});
            console.log (response);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {isEdit ?
                <form onSubmit={handleEditSubmit}>
                    <input className = {styles.Form} onChange={handleTypingEdit} value={edit} />
                </form>
                : !todoItem.status? <h2 onClick={handleEdit}>{todoItem.task}</h2> 
                    : <h2 style = {{textDecoration: 'line-through', color: 'grey'}} onClick={handleEdit}>{todoItem.task}</h2> }
        </>
    )
}

export default TodoForm