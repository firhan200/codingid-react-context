import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
