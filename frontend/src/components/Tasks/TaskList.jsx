import React, { useState, useEffect, useMemo } from "react";
import { taskService } from "../../services/taskService";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import LoadingSpinner from "../Common/LoadingSpinner";
import ErrorMessage from "../Common/ErrorMessage";
import { TASK_STATUS } from "../../utils/constants";
import "./Tasks.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: TASK_STATUS.PENDING, label: "Pending" },
  { key: TASK_STATUS.IN_PROGRESS, label: "In Progress" },
  { key: TASK_STATUS.COMPLETED, label: "Completed" },
];

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await taskService.getTasks();
      setTasks(tasksData);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks([...tasks, newTask]);
      setShowForm(false);
    } catch (err) {
      setError("Failed to create task");
    }
  };

 const handleUpdateTask = async (taskId, taskData) => {
  try {
    const updatedTask = await taskService.updateTask(taskId, taskData);
    setTasks(tasks.map(task => 
      (task._id || task.id) === taskId ? updatedTask : task
    ));
    setEditingTask(null);
  } catch (err) {
    setError('Failed to update task');
  }
};

 const handleDeleteTask = async (taskId) => {
  try {
    await taskService.deleteTask(taskId);
    setTasks(tasks.filter(task => (task._id || task.id) !== taskId));
  } catch (err) {
    setError('Failed to delete task');
  }
};

 const handleToggleComplete = async (taskId) => {
  try {
    const updatedTask = await taskService.toggleTaskComplete(taskId);
    setTasks(tasks.map(task => 
      (task._id || task.id) === taskId ? updatedTask : task
    ));
  } catch (err) {
    setError('Failed to update task status');
  }
  };

  const filterCounts = useMemo(() => {
    return {
      all: tasks.length,
      [TASK_STATUS.PENDING]: tasks.filter((t) => t.status === TASK_STATUS.PENDING).length,
      [TASK_STATUS.IN_PROGRESS]: tasks.filter((t) => t.status === TASK_STATUS.IN_PROGRESS).length,
      [TASK_STATUS.COMPLETED]: tasks.filter((t) => t.status === TASK_STATUS.COMPLETED).length,
    };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (activeFilter === "all") return tasks;
    return tasks.filter((task) => task.status === activeFilter);
  }, [tasks, activeFilter]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="task-list-container">
      <div className="tasks-page-header">
        <div>
          <h1>My Tasks</h1>
          <p className="tasks-subtitle">
            {tasks.length} total · {filterCounts[TASK_STATUS.PENDING]} pending ·{" "}
            {filterCounts[TASK_STATUS.COMPLETED]} completed
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add New Task
        </button>
      </div>

      <nav className="tasks-navbar" aria-label="Filter tasks">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`tasks-nav-btn ${activeFilter === key ? "active" : ""}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
            <span className="tasks-nav-count">{filterCounts[key]}</span>
          </button>
        ))}
      </nav>

      {error && <ErrorMessage message={error} />}

      {showForm && (
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editingTask && (
        <TaskForm
          task={editingTask}
           onSubmit={(data) => handleUpdateTask(editingTask._id || editingTask.id, data)}
          onCancel={() => setEditingTask(null)}
        />
      )}

      <div className="tasks-grid">
        {filteredTasks.length === 0 ? (
          <div className="no-tasks">
            <p>
              {tasks.length === 0
                ? "No tasks yet. Create your first task!"
                : `No ${activeFilter === "all" ? "" : activeFilter.replace("_", " ")} tasks found.`}
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task._id || task.id}
              task={task}
              onEdit={() => setEditingTask(task)}
              onDelete={() => handleDeleteTask(task._id || task.id)}
              onToggleComplete={() => handleToggleComplete(task._id || task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
