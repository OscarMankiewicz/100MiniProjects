import Habit from "./Habit";

export default function HabitList({habits}) {
  return (
    <div className="habit-list">
      {habits.map((habit, index) => (
        <Habit key={index} habit={habit} />
      ))}
    </div>
  );
}