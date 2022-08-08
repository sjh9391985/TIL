import React, { useEffect, useReducer, useRef, useState } from "react";

import ReactDom from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onscroll = (event) => {
    console.log(event);
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll); // 이벤트 추가시 같은 이름 handler 로 지워야 함.
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ color: y > 100 ? "red" : "blue" }}>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
