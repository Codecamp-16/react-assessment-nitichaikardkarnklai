import React from 'react'
import styles from "./MyTodosPage.module.scss"
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

function MyTodoList() {
    const { todoList } = useTodo();

    return (
        <div>
            {todoList.map((el, id) => {
                return <TodoItem key={id} todo={el.todo} />
            })}
        </div>
    )
}

export default MyTodoList