import React, { useState } from "react";

import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";


export default function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = habitName => {
    const newHabit = { name: habitName };
    setHabits([...habits, newHabit]);
  };

  return (
    <div className="habit-tracker">
      <h1>Habit Tracker</h1>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}
