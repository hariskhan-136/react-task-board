type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li>
      <span>
        {task.title} - {task.completed ? "Completed" : "Active"}
      </span>

      <button type="button" onClick={() => onToggle(task.id)}>
        {task.completed ? "Mark Active" : "Mark Completed"}
      </button>

      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
