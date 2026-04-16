export function getMonthData(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const daysArray = [];

  // Empty spaces before first day
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null);
  }

  // Actual days
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  return daysArray;
}