import React from 'react';
import AddTodo from '../containers/AddTodo';
import ViewTodoList from '../containers/ViewTodoList';

export default function App() {
  return (
    <div>
      <AddTodo />
      <ViewTodoList />
    </div>
  );
}

