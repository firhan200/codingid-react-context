import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function useTodo() {
  const todoContext = useContext(TodoContext);

  return todoContext;
}
