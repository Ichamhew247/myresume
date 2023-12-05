import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFilterCircle } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";
import Clock from "./Clock";
import Banner from "./banner";
import TodoForm from "./TodoForm";

function Todos() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const addTodo = (e) => {
    e.preventDefault();
    if (title === "" || title === undefined) {
      alert("List cannot be blank!!!");
      return;
    }
    const newTodos = [
      ...todos,
      { id: uuidv4(), title: title, completed: false },
    ];
    setTodos(newTodos);
    setTitle("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main className="container">
        <div>
          <Banner />
        </div>

        <div className="flex justify-between items-center px-4 gap-5">
          {/* Search */}
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="cursor-pointer ">
              <BsFilterCircle style={{ color: "#D0E9E9", fontSize: "34px" }} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 bg-white rounded-box w-52"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-white drop-shadow-sm px-4 py-2 outline-none rounded-lg placeholder-white bg-[#D0AAD1] font-semibold opacity-50"
                placeholder="Search.........."
              />
            </ul>
          </div>
          {/* Add Todo List */}
          <main className="w-[800px] pl-6 flex justify-between border border-[#D0E9E9] rounded-3xl">
            <input
              className="   w-[510px] placeholder-[#D0AAD1] text-[#D0AAD1] outline-none font-medium text-lg"
              value={title}
              placeholder="Add New Task..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="bg-[#D0E9E9] hover:bg-[#DFAF8F] hover:text-white text-[#D0AAD1] font-medium px-9 py-2 rounded-full text-lg"
              onClick={addTodo}
            >
              ADD
            </button>
          </main>
        </div>
        <div className="text-[#D0AAD1] pt-8 px-4 font-medium">
          <Clock />
        </div>
        {/* Todos */}
        <div className="bg-[#FFE7C1] p-4">
          {filteredTodos.length >= 1 ? (
            filteredTodos.map((item) => (
              <TodoForm
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
              />
            ))
          ) : (
            <div className="text-center text-xl font-semibold text-[#E09EA0]">
              Add Your List !!!
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Todos;
