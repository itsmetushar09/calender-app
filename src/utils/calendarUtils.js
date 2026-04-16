export function getMonthData(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const daysArray = [];

  
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null);
  }

  
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  return daysArray;
}