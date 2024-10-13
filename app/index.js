import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const div = document.createElement("div");

div.setAttribute("id", "app");

document.body.appendChild(div);

const root = createRoot(document.querySelector("#app"));

root.render(<h1>Hello, world</h1>);
