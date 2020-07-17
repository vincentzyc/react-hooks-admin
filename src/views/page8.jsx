import React from 'react';
import { useHistory } from "react-router-dom";

function Page8() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <h3>page8</h3>
      <button type="button" onClick={handleClick}>Go home</button>
    </div>
  );
}

export default Page8;