import React, { useContext, useReducer } from "react";
import { Redirect } from "react-router-dom";
import Siderbar from "./siderbar"

import Store from "../store/context";
import reducer from "../store/reducer";

export default function BasicLayout(props) {
  let isLogin = window.localStorage.getItem("y_userName");

  const [state, dispatch] = useReducer(reducer, useContext(Store));

  return isLogin ? (
    <Store.Provider value={{ state, dispatch }} >
      <div className="wrapper">
        <header className="header">
          <div style={{ width: '100%' }}>
            <img src={require('../assets/img/logo.svg')} alt="logo" width="70px" />
          </div>
        </header>

        <div className="sidebar">
          <Siderbar />
        </div>

        <section id="container">
          <div style={{ minWidth: '1100px', height: '100%' }}>
            {props.children}
          </div>
        </section>
      </div>
    </Store.Provider>
  ) : (
      <Redirect replace to="/login" />
    )
}
