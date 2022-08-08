import React, { useEffect, useReducer, useRef, useState } from "react";

import ReactDom from "react-dom";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); // navigator 가 online 인지 offline 인지 확인해줌.

  const handleChange = () => {
    if (typeof onChange === "function") {
      setStatus(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const online = useNetwork();
  const handleNetworkChange = (online) => {
    console.log(online ? "Oline" : "Offline");
  };
  return (
    <div className="App">
      <h1>{handleNetworkChange}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
