import React from 'react';
import styles from "./MyTodosPage.module.scss";
import MyTodoHeader from './MyTodoHeader';
import MyTodoList from './MyTodoList';
import TodoContextProvider from '../context/TodoContext';

function MyTodosPage() {
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