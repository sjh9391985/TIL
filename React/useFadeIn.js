import React, { useEffect, useReducer, useRef } from "react";

import ReactDom from "react-dom";

const useFadeIn = () => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity 3s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn;

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p>World~~</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
