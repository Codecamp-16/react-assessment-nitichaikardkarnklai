import React, { useEffect } from 'react';
import styles from "./MyTodosPage.module.scss";
import MyTodoHeader from './MyTodoHeader';
import MyTodoList from './MyTodoList';
import TodoContextProvider, { useTodo } from '../context/TodoContext';
import { useLogin } from '../context/LoginContext';

function MyTodosPage() {
  const { getMe, fetchAllTodo } = useLogin();

  useEffect(() => {
    getMe()
      .then(() =>
        fetchAllTodo())
      .catch((err) => console.log(err));
  }, [])

  return (
    <TodoContextProvider>
      <div className={styles.MyTodosPage}>
        <div className={styles.MyTodosPage__window}>
          <MyTodoHeader />
          <MyTodoList />
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default MyTodosPage