import TaskItem from "./TaskItem";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <section>
        <h2>Tasks</h2>
        <p>No tasks available.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
