import React from "react";
import { useState } from "react";
import { addtodo } from "../Redux/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();

  const todocount = useSelector((state) => {
    return state;
  });

//   console.log(todocount);
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleTodoAdd() {
    let obj = {
      id: Math.random() + Date.now(),
      title: title,
      status: false,
    };
    dispatch(addtodo(obj));
    setTitle("")
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={handleChange}
      />
      <button onClick={handleTodoAdd}>Add</button>

      {todocount.todo && todocount.todo.map((ele) => {
        return (
          <div key={ele.id}>
            <p>{ele.title}</p>
            <p>{ele.status ? "Completed" : "Pending"}</p>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
