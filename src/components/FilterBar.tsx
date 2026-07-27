type Filter = "all" | "active" | "completed";

interface FilterBarProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  return (
    <section>
      <h2>Filter Tasks</h2>

      <button
        type="button"
        onClick={() => onFilterChange("all")}
        disabled={currentFilter === "all"}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("active")}
        disabled={currentFilter === "active"}
      >
        Active
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        disabled={currentFilter === "completed"}
      >
        Completed
      </button>
    </section>
  );
}

export default FilterBar;
