import { getMonthData } from "../utils/calendarUtils";
import DayCell from "./DayCell";

export default function CalendarGrid({
  date,
  startDate,
  endDate,
  setStartDate,
  setEndDate
}) {
  const year = date.getFullYear();
  const month = date.getMonth();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const days = getMonthData(year, month);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "12px",
        marginTop: "10px",
      }}
      
    >
        {weekDays.map(day => (
  <div key={day} style={{ fontWeight: "bold" }}>
    {day}
  </div>
))}
      {days.map((day, index) => (
        <DayCell
          key={index}   
          day={day}
           date={date}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      ))}
    </div>
  );
}