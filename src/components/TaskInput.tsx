import { useState } from "react";

interface TakeInputProps {
  onAddTask: (title: string) => void;
}

function TaskInput({ onAddTask }: TakeInputProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a task"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
