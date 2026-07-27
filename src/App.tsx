import { useState } from "react";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

type Filter = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function handleToggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const activeTasks = tasks.filter((task) => !task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <main>
      <h1>Task Board</h1>

      <TaskInput onAddTask={handleAddTask} />

      <FilterBar currentFilter={filter} onFilterChange={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />

      <section>
        <h2>Task Statistics</h2>

        <p>Total Tasks: {totalTasks}</p>

        <p>Active Tasks: {activeTasks}</p>

        <p>Completed Tasks: {completedTasks}</p>
      </section>
    </main>
  );
}

export default App;
