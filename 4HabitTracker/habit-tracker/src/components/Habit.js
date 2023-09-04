import React, { useState } from 'react';
import { getCurrentWeek } from '../dateUtils';
import WeekNavigation from './WeekNavigation';

export default function Habit({ habit, onDelete, onToggleCheck}) {
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

  const nextWeek = () => {
    navigateWeeks(1);
  };

  const previousWeek = () => {
    navigateWeeks(-1);
  };

  const navigateWeeks = (offset) => {
    let newWeekNumber = currentWeek.weekNumber + offset;
    let newYear = currentWeek.year;
  
    console.log(`Old Values: Year - ${newYear}, Week - ${newWeekNumber}`);
  
    if (newWeekNumber > 52) {
      newWeekNumber = 1;
      newYear += 1;
    } else if (newWeekNumber < 1) {
      newWeekNumber = 52;
      newYear -= 1;
    }
  
    console.log('New Week:', newWeekNumber, 'New Year:', newYear);
  
    const newStartDate = new Date(newYear, 0, 1 + (newWeekNumber - 1) * 7);
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newEndDate.getDate() + 6);
  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const newWeekString = `${monthNames[newStartDate.getMonth()]}: ${newStartDate.getDate()} - ${newEndDate.getDate()}`;
    const isoWeekString = `${newYear}-W${newWeekNumber.toString().padStart(2, "0")}`;
  
    setCurrentWeek({ 
      ...currentWeek, 
      weekNumber: newWeekNumber, 
      year: newYear, 
      weekString: newWeekString,
      isoWeekString: isoWeekString
    });
  };
  
  const toggleCheck = (dayIndex) => {
    onToggleCheck(habit.name, currentWeek.isoWeekString, dayIndex);
  };
  
  const currentWeekData = habit.tracking[currentWeek.isoWeekString] || [false, false, false, false, false, false, false];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="habit">
      <button onClick={() => onDelete(habit.name)}>X</button>
      <span>{habit.name}</span>
      <WeekNavigation currentWeek={currentWeek.weekString} onNextWeek={nextWeek} onPreviousWeek={previousWeek} />
      <div className="habit-tracking">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="habit-day">
            <label>{day}</label>
            <input 
              type="checkbox" 
              checked={currentWeekData[index]} 
              onChange={() => toggleCheck(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
