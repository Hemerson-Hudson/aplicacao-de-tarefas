import React from "react";

function TaskItem({ task, removeTask }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>

      <button onClick={() => removeTask(task.id)}>
        Excluir
      </button>
    </div>
  );
}

export default TaskItem;