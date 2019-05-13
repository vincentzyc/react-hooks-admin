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
      <div style={{ height: '100%', position: 'relative' }}>
        <header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 70, padding: 0, background: '#002140' }}>
          <div style={{ width: '100%' }}>
            <img src={require('../assets/img/logo.svg')} alt="logo" width="70px" />
          </div>
        </header>

        <div style={{ position: 'fixed', top: 70, left: 0, bottom: 0 }}>
          <Siderbar />
        </div>

        <section id="section_layout" style={{ position: 'absolute', top: 70, left: 200, right: 0, bottom: 0, transition: '0.3s', overflow: 'auto' }}>
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
