import React, { useState } from "react";
import "./App.css";

import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { getCurrentWeek, getWeekNumber } from "./dateUtils";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

  const nextWeek = () => {
    let newDate = new Date(currentWeek.startOfWeek);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeek(getCurrentWeek(newDate));
  };
  
  const previousWeek = () => {
    let newDate = new Date(currentWeek.startOfWeek);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeek(getCurrentWeek(newDate));
  };
  
  const addHabit = habitName => {
    const newHabit = { 
      name: habitName,
      currentWeek: getCurrentWeek(),
      tracking: {
        [getCurrentWeek()]: [false, false, false, false, false, false, false]
      }
    };
    setHabits([...habits, newHabit]);
  };
  
  const toggleCheck = (habitName, week, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.name === habitName) {
        if (!habit.tracking[week]) {
          habit.tracking[week] = [false, false, false, false, false, false, false];
        }
        return {
          ...habit,
          tracking: {
            ...habit.tracking,
            [week]: habit.tracking[week].map((isChecked, index) => 
              index === dayIndex ? !isChecked : isChecked
            ),
          }
        };
      }
      return habit;
    }));
  };

  const deleteHabit = habitName => {
    setHabits(habits.filter(habit => habit.name !== habitName));
  };

  return (
    <div className="habit-tracker">
      <h1>Habit Tracker</h1>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} onDelete={deleteHabit} onToggleCheck={toggleCheck} getCurrentWeek={getCurrentWeek}/>
    </div>
  );
}
