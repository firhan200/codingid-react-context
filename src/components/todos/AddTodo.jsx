import { useState } from "react";
import useTodo from "../../hooks/useTodo";

export default function AddTodo() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todo);

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
