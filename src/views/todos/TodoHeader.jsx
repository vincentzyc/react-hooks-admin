import React from "react";

export const TodoHeader = (props) => (
  <div className="flex flex-column text-center">
    <h3>Todo List</h3>
    <div className="mg-t15">
      {props.children}
    </div>
  </div>
);
