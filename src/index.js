import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

function Application(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  function reset() {
    setName("");
  }

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter your name"
      />
      {name && (
        <Fragment>
          <h1>Hello, {name}!</h1>
          <Button onClick={reset}>Reset</Button>
        </Fragment>
      )}
      <Button onClick={(event) => setName("")}>Clear Name</Button>

      <Button onClick={(event) => setCount(count + 1)}>Increment</Button>
      <Button onClick={(event) => setCount(count - 1)}>Minus 1</Button>
      <Button onClick={(event) => setCount(count - count)}>zero</Button>
      <h1>Button was clicked {count}</h1>
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
