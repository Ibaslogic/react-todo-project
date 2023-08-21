import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp";
import { BrowserRouter as Router } from "react-router-dom";
import '@/styles/app.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>
);
