import React from "react";
import ReactDOM from "react-dom/client";
console.log("Hello");
let root = ReactDOM.createRoot(document.getElementById("root"));
let heading1 = React.createElement("h1", { id: "title" }, "Harsh Jain");
let heading2 = React.createElement("h1", { id: "title" }, "Jain Jain");
let container = React.createElement(
  "div",
  { id: "contain" },
  heading1,
  heading2
);
console.log("Hello");
root.render(container);
console.log("Hello");
