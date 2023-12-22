import React from "react";
import ReactDOM from "react-dom/client";
let root = ReactDOM.createRoot(document.getElementById("root"));
let heading1 = React.createElement("h1", { id: "title1" }, "Harsh Jain");
let heading2 = React.createElement("h1", { id: "title2" }, "Jain Jain");
let container = React.createElement(
  "div",
  { id: "contain" },
  heading1,
  heading2
);
root.render(container);
