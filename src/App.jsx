// import React from 'react';
import React, { useContext, useReducer } from "react";
import RouterConfig from "./router";
import './assets/css/App.css';

import Store from "./store/context";
import reducer from "./store/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, useContext(Store));
  return (
    <Store.Provider value={{ state, dispatch }} >
      <RouterConfig />
    </Store.Provider>
  )
}

export default App;