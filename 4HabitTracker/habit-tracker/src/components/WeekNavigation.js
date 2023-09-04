export default function WeekNavigation({ currentWeek, onNextWeek, onPreviousWeek }) {
  return (
    <div className="week-navigation">
      <button onClick={onPreviousWeek}>&lt;</button>
      <span>{currentWeek}</span>
      <button onClick={onNextWeek}>&gt;</button>
    </div>
  );
}
