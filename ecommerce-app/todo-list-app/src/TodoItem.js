// TodoItem.js

import React, { useState } from "react";

const TodoItem = ({ task, index, removeTask, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleRemove = () => {
    removeTask(index);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    editTask(index, editedTask);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <li style={{ marginLeft: "10px" }}>
      {editing ? (
        <input type="text" value={editedTask} onChange={handleChange} />
      ) : (
        <span>{task}</span>
      )}
      {editing ? (
        <button onClick={handleSave} style={{ backgroundColor: "#008000" }}>
          Save
        </button>
      ) : (
        <>
          <button
            onClick={handleEdit}
            className="mx-3"
            style={{ backgroundColor: "#FFA500" }}
          >
            Edit
          </button>
          <button
            onClick={handleRemove}
            style={{ backgroundColor: "#800000", color: "white" }}
          >
            Remove
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
