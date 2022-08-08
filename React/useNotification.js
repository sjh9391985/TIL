import React, { useEffect, useReducer, useRef, useState } from "react";

import ReactDom from "react-dom";

const useNotification = (title, options) => {
  if (!"Notification" in window) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I Steal your information?");

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Alerm</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
