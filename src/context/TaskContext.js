import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(updatedTask) {
    setTasks(
      tasks.map(task =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}