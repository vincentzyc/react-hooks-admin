import React, { useState, useContext } from "react";
// import React from "react";

import Store from "../hooks/context";


const Page2 = props => {

  const { state, dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div>
      <img
        src={require("../assets/img/logo.svg")}
        alt="logo"
        className="App-logo"
        onClick={() => {
          props.history.push("/page3");
        }}
      />
      <div className="todos" style={{ width: '400px', margin: 'auto' }}>
        <div className="flex row">
          <input
            className="mg-r10"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <button className="btn" onClick={handleTodoAdd}>Add</button>
        </div>
        <ul className="row">
          {state.todos.map(t => (
            <li key={t} className="flex align-middle">
              <h4 className="flex-auto mg-r20">{t}</h4>
              <button className="btn" onClick={() => dispatch({ type: "COMPLETE", payload: t })}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page2;