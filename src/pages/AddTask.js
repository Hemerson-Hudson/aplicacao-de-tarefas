import React, {
  useState,
  useContext
} from "react";

import { useNavigate } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [title, setTitle] = useState("");

  const { addTask } = useContext(TaskContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title
    };

    addTask(newTask);

    navigate("/");
  }

  return (
    <div>
      <h1>Adicionar Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <button type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default AddTask;