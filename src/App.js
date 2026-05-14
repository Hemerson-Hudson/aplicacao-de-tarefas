import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home.js";
import AddTask from "./pages/AddTask.js";

import { TaskProvider } from "./context/TaskContext";

import "./App.css";

function App() {
  document.title = "Aplicação de Tarefas";
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/add-task"
            element={<AddTask />}
          />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;