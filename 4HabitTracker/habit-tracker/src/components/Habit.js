

export default function Habit({habit}) {
  return (
    <div className="habit">
      <span>{habit.name}</span>
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
        <label key={day}>
          {day}
          <input type="checkbox" />
        </label>
      ))}
    </div>
  );
}