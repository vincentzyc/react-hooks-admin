import React, { useContext } from "react";
import Store from "./context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
        <TodoHeader>
          <span>{pluralize(state.todos.length)}</span>
        </TodoHeader>
      );
  return (
    <div className="flex flex-column">
      <div className="mg20">
        {header}
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
  );
}
