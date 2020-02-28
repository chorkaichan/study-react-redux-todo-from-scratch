import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { deleteTodo } from '../actions';

const mapStateToProps = state => ({
  todos: state.todos.filter(t => !t.deleted)
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);


