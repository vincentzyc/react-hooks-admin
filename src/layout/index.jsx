import React from "react";
import { Redirect } from "react-router-dom";
import Siderbar from "./siderbar"
import HeaderDropdown from "./header-dropdown";

export default function BasicLayout(props) {
  let isLogin = window.localStorage.getItem("y_userName");

  return isLogin ? (
    <div className="wrapper">
      <header className="header">
        <div style={{ width: '100%' }}>
          <img src={require('../assets/img/logo.svg')} alt="logo" width="70" height="70" className="mg-l20"/>
          <HeaderDropdown userName={isLogin}/>
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
  ) : (
      <Redirect replace to="/login" />
    )
}
