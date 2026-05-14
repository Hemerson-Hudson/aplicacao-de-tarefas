import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

import TaskItem from "../components/TaskItem";

function Home() {
  const { tasks, removeTask } =
    useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <Link to="/add-task">
        <button>Adicionar Tarefa</button>
      </Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            removeTask={removeTask}
          />
        ))
      )}
    </div>
  );
}

export default Home;