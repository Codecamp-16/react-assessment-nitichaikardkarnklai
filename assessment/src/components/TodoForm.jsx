import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import styles from "./TodoForm.module.scss"

function TodoForm({todoItem}) {
    const [isEdit, setIsEdit] = useState(false); 
    const [edit, setEdit] = useState("");
    const { todoList, setTodoList} = useTodo();

    const handleEdit = () => {
        setIsEdit(true);
        setEdit(todoItem.todo);
    }
    const handleTypingEdit = (event) => {
        setEdit(event.target.value);
    };
    const handleEditSubmit = (event) => {
        event.preventDefault();
        if (edit) {
            const foundIndex = todoList.findIndex(el => el.id == todoItem.id);
            const editedObj = {...todoList[foundIndex], todo: edit};
            console.log(todoList);
            const clonedTodoList = [...todoList];
            clonedTodoList.splice(foundIndex, 1, editedObj);
            // console.log(tempEditedTodoList);
            setTodoList(clonedTodoList);
            setIsEdit(false);
        }
    }
    return (
        <>
            {isEdit ?
                <form onSubmit={handleEditSubmit}>
                    <input className = {styles.Form} onChange={handleTypingEdit} value={edit} />
                </form>
                : !todoItem.status? <h2 onClick={handleEdit}>{todoItem.todo}</h2> 
                    : <h2 style = {{textDecoration: 'line-through', color: 'grey'}} onClick={handleEdit}>{todoItem.todo}</h2> }
        </>
    )
}

export default TodoForm