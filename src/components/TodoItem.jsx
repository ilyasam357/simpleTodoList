function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div key={index} className="bg-slate-50 m-3 p-2 w-full rounded-xl">
      <h1 className="text-2xl text-start">{todo.title}</h1>
      <p className="text-xl text-start"> {todo.description}</p>
      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold mt-4 text-end"
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
