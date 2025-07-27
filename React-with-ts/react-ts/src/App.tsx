import React from "react";
import type { Todos } from "./ToDoComponents/Todos";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todos[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
};

export default App;
