import { useState } from 'react';
import './Todo.css';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Pending') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true; // All
  });

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="filter-section">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'Pending' ? 'active' : ''} onClick={() => setFilter('Pending')}>Pending</button>
        <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={handleClearAll} className="clear-btn">Clear All</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
