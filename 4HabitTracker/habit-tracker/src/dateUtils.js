export function getWeekNumber(date) {
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return weekNumber;
}

export function getCurrentWeek(date = new Date()) {
  const currentDate = date;
  const weekNumber = getWeekNumber(currentDate);

  const startOfWeek = new Date(currentDate.getFullYear(), 0, 1 + (weekNumber - 1) * 7);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  const year = currentDate.getFullYear();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return {
    weekString: `${monthNames[startOfWeek.getMonth()]}: ${startOfWeek.getDate()} - ${endOfWeek.getDate()}`,
    weekNumber,
    year,
    startOfWeek,
    endOfWeek
  };
}

export function getStartOfWeek(date) {
  const day = date.getUTCDay();
  const diff = date.getUTCDate() - day + (day === 0 ? -6 : 1);
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), diff));
}

export function getEndOfWeek(date) {
  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);
  return endOfWeek;
}