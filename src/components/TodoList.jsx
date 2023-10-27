import Card from "./ui/Card";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addTodo = () => {
    if (title && description) {
      const newTodo = { title, description };
      setTodos([newTodo, ...todos]);
      setTitle("");
      setDescription("");
      setShowForm(false);
      localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]));
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="flex flex-col items-center">
      <Card bgColor="bg-blue-500">
        <h1 className="text-white font-bold text-xl">Todo List</h1>
      </Card>

      {showForm ? (
        <TodoForm
          title={title}
          description={description}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          addTodo={addTodo}
        />
      ) : (
        <Card bgColor="bg-blue-400 p-9">
          <button
            onClick={() => setShowForm(true)}
            className="bg-white w-full rounded-lg py-3 font-bold text-base"
          >
            Show
          </button>
        </Card>
      )}

      <Card bgColor="bg-blue-300 p-9">
        <div className="grid  xl:grid-cols-2 xl:gap-4  justify-items-start ">
          {!(todos.length > 0) ? (
            <div>
              <h2>todo list</h2>
              <p>Todo list empty</p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </div>
      </Card>
    </div>
  );
}

export default TodoList;
