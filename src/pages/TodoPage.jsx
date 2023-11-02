import AddTodo from "../components/todos/AddTodo";
import TodoCounter from "../components/todos/TodoCounter";
import TodoList from "../components/todos/TodoList";
import { TodoProvider } from "../contexts/TodoContext";

export default function TodoPage() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoCounter />
      <TodoList />
    </TodoProvider>
  );
}
