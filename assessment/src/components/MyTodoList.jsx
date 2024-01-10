import React from 'react'
import styles from "./MyTodosPage.module.scss"
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

function MyTodoList() {
    const { todoList } = useTodo();

    return (
        <div>
            {todoList.map((el) => {
                return <TodoItem key={el.id} todoItem={el} />
            })}
        </div>
    )
}

export default MyTodoList