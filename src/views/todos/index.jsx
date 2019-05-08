import React, { useContext, useReducer } from "react";
import { usePersistedContext, usePersistedReducer } from './usePersist'

import Store from "./context";
import reducer from "./reducer";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    <div className="flex flex-column todos" style={{ width: '400px', margin: '20px auto' }}>
      <Store.Provider value={{ state, dispatch }} >
        <TodoForm />
        <TodoList />
      </Store.Provider>
    </div>
  );
}

export default App;
