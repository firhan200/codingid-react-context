import useTodo from "../../hooks/useTodo";

export default function TodoCounter() {
  const { todos } = useTodo();

  return <p>{todos.length} items</p>;
}
