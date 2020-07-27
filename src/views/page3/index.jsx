import React, { useReducer, useContext } from 'react';
import Store from "./context";
import reducer from "./reducer";

import PageList from "./list";

const Page3 = () => {
  const [state, dispatch] = useReducer(reducer, useContext(Store));
  return (
    <Store.Provider value={{ state, dispatch }} >
      <PageList />
    </Store.Provider>
  )
}

export default Page3;