import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/index";
import { useState } from "react";

function App() {
  const [todo, SetTodo] = useState([
    {
      title: "Default Todo",
      id: "bf18b78f-4f06-48e7-8ff9-fe231252481f",
      completed: false,
    },
    {
      title: "Default Todo_2",
      id: "8090110b-37e4-480e-9b32-784d8e70a521",
      completed: true,
    },
  ]);

  const data = {
    todo,
    SetTodo,
  };

  return (
    <TodoContext.Provider value={data}>
      <div className="flex flex-col justify-center content-center text-center  gap-1 text-xl">
        <Header />
        <div className="flex flex-col justify-center content-center text-center  h-full  gap-3 text-xl">
          <Form />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
