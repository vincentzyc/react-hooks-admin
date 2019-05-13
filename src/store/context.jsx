import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    "111",
    "222",
    "333"
  ]
});

export default Store;
