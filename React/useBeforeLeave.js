import React, { useEffect } from "react";

import ReactDom from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (!onBefore || typeof onBefore !== "function") {
    return;
  }

  const handle = () => {
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

const App = () => {
  const begForLife = () => {
    console.log("Please don't leave");
  };

  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
