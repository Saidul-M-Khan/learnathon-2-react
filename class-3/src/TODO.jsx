import { useCallback, useEffect, useRef, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // For demonstration purposes, we'll use local storage
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Update local storage when todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  }, [todos, newTodo]);

  const handleToggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleRemoveTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div style={{ borderColor: "black", borderBottomStyle: "solid" }}>
        Count: {todos.length}
      </div>
      <table>
        <tr>
          <th>Task SL.</th>
          <th>|</th>
          <th>Task Name</th>
          <th>|</th>
          <th>Action</th>
        </tr>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td></td>
            <td
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </td>
            <td></td>
            <td>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default TodoApp;
