import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => (
  <>
  {todos.map(todo => (
    <Todo key={todo.id} {...todo} onClick={() =>
      deleteTodo(todo.id)} />
  ))}
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      deleted: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
