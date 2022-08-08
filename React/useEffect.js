import React, { useState, useEffect } from "react";

import ReactDom from "react-dom";

const hello = () => console.log("hello!");

const [number, setNumber] = useState(0);
const [aNumber, setAnumber] = useState(0);

useEffect(hello, [number]);

const App = () => {
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
