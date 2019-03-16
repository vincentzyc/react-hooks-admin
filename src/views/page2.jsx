import React from 'react';

const Page2 = props => (
  <div onClick={() => {
    props.history.push("/page3");
  }}
  >
    <img
      src={require("../assets/img/logo.svg")}
      alt="logo"
      className="App-logo"
    />
  </div>
);

export default Page2;