import Habit from "./Habit";

export default function HabitList({habits, onDelete, onToggleCheck}) {
  return (
    <div className="habit-list">
      {habits.map((habit, index) => (
        <Habit key={index} habit={habit} onDelete={onDelete} onToggleCheck={onToggleCheck}/>
      ))}
    </div>
  );
}