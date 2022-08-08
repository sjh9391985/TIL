import React from "react";

import ReactDom from "react-dom";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    }
  };

  return confirmAction;
};

const App = () => {
  const del_word = () => {
    alert("delete word");
  };

  const confirmDelete = useConfirm("Are you sure", del_word);

  return (
    <div className="App">
      <button click={confirmDelete}>Delete</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
