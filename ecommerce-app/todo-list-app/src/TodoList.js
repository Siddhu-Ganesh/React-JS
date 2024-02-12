import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import Cookies from "js-cookie";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(sessionStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, id: Date.now() }]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const handlePriorityChange = (dragIndex, hoverIndex) => {
    const newTasks = [...tasks];
    const [draggedTask] = newTasks.splice(dragIndex, 1);
    newTasks.splice(hoverIndex, 0, draggedTask);
    setTasks(newTasks);
  };

  return (
    <div style={{}}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          backgroundImage: `url("https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          textAlign: "center",
          paddingTop: "100px", // Adjust this value based on your header height
        }}
      >
        <h1>
          <b style={{ color: "white" }}>My To-Do List</b>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            position: "sticky",
          }}
        >
          <input
            style={{ marginRight: "10px", padding: "5px" }}
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="mx-2"
            onClick={addTask}
            style={{ padding: "5px 10px", backgroundColor: "#00ffa2" }}
          >
            Add
          </button>
        </div>
        <ol
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {tasks.map((task, index) => (
            <li
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                margin: "10px",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                width: "80%",
              }}
            >
              <TodoItem
                key={task.id}
                task={task}
                index={index}
                editTask={editTask}
                removeTask={removeTask}
                handlePriorityChange={handlePriorityChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
