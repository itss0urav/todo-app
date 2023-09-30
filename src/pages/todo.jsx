import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inpTodo, setInpTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);

  const handleSubmit = () => {
    if (todoEdit !== null) {
      setTodo(todo.map((data, index) => (index === todoEdit ? inpTodo : data)));
      setTodoEdit(null);
    } else {
      setTodo([...todo, inpTodo]);
    }
    setInpTodo("");
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((data, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInpTodo(todo[index]);
    setTodoEdit(index);
  };

  return (
    <div className="">
      <div className="bg-black flex justify-center gap-2 p-3">
        <input
          value={inpTodo}
          onChange={(e) => setInpTodo(e.target.value)}
          placeholder="Enter your tasks"
          className="rounded-md text-center"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="hover:bg-gray-800 rounded-md p-1 text-white bg-gray-700"
        >
          Submit
        </button>
      </div>
      <div className="text-center">
        {todo.map((data, index) => (
          <p key={index}>
            {data}
            <button
              onClick={() => handleEdit(index)}
              className="bg-black m-1 hover:bg-gray-400 text-white rounded-md p-1"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-600 m-1 hover:bg-red-700 text-white rounded-md p-1"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Todo;
