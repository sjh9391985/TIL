import React, { useEffect, useRef } from "react";

import ReactDom from "react-dom";
const useClick = (onClick) => {
const element = useRef();

useEffect(() => {
if (element.current) {
element.current.addEventListener("click", onClick);
}

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };

}, []);

return element;
};

const App = () => {
const alerm = () => {
alert("hello!");
};

const title = useClick(alerm);
return (
<div className="App">
<h1 ref={title}>Hi</h1>
</div>
);
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
