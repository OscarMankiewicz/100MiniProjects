import react from "react";

export default function HabitForm({onAdd}) {
  const [habit, setHabit] = react.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(habit);
    setHabit("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={e => setHabit(e.target.value)}
        placeholder="Add habit"
      />
      <button type="submit">Add</button>
    </form>
  )
}