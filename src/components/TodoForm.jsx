import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoForm(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.title);

  const [todos, setTodos] = useContext(TodoContext);

  const handleEdit = (e) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === props.id) {
        item.title = e.target.value;
      }
      return item;
    });
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const completedTodo = (e) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = e.target.checked;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const isCompleted = props.completed ? "checked" : "";
  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(filteredTodo);
  };

  return (
    <>
      <div className=" bg-white px-6 m-4 text-[32px] text-[#D0AAD1] flex border border-[#E09EA0] justify-between items-center rounded-3xl">
        <div className="control-group  h-8 flex p-2">
          <label className="control control-checkbox ">
            <input
              type="checkbox"
              id={props.id}
              value={props.id}
              checked={isCompleted}
              onChange={(e) => completedTodo(e)}
            />
            <div className="control_indicator"></div>
          </label>
        </div>

        {isEditing ? (
          <div>
            <input
              className=" text-center text-[32px] text-[#E09EA0] flex  outline-none underline "
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleEdit}
            />
          </div>
        ) : (
          <p
            htmlFor={props.id}
            onDoubleClick={() => setIsEditing(true)}
            className={isCompleted ? "completed-text" : ""}
          >
            {props.title}
          </p>
        )}

        <div
          className="flex items-center cursor-pointer "
          type="button"
          id={props.id}
          onClick={() => deleteTodo(props.id)} // Pass the id directly to deleteTodo
        >
          <RiDeleteBin6Fill style={{ color: "#E09EA0", fontSize: "34px" }} />
        </div>
      </div>
    </>
  );
}

export default TodoForm;
