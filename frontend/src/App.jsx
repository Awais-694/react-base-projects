
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm'

function App(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);


  const addTodo = async (taskName) => {
    const res = await axios.post('http://localhost:5000/api/todos', { task: taskName });
    setTodos([...todos, res.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
        <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
      </Routes>
    </div>
  );



}


export default App;