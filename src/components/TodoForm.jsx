import Card from "./ui/Card";
function TodoForm({
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  addTodo,
}) {
  return (
    <Card bgColor="bg-blue-400 p-9">
      <div className="bg-slate-100 rounded-lg p-4">
        <input
          className="w-full h-11 border p-2"
          type="text"
          placeholder="Judul"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="w-full h-11 border p-2 mt-3"
          type="text"
          placeholder="Deskripsi"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button
          onClick={addTodo}
          className="bg-black w-full text-white p-2 rounded-xl text-base"
        >
          Add
        </button>
      </div>
    </Card>
  );
}

export default TodoForm;
