import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tasks</h2>
      {todos.length === 0 ? <p>No tasks found. Add some!</p> : (
        todos.map((t) => (
          <TodoItem key={t._id} todo={t} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;