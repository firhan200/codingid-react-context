import useTodo from "../../hooks/useTodo";

export default function TodoList() {
  const { todos, removeTodo } = useTodo();

  return (
    <ul>
      {todos.map((todo, id) => (
        <li key={id}>
          {todo}
          <button onClick={() => removeTodo(todo)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
