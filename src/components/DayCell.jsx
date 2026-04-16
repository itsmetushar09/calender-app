export default function DayCell({
  day,
  date,
  startDate,
  endDate,
  setStartDate,
  setEndDate
}) {
  
  if (!day) return <div style={{ height: "40px" }}></div>;

  const todayDate = new Date();

  const isToday =
    day === todayDate.getDate() &&
    date.getMonth() === todayDate.getMonth() &&
    date.getFullYear() === todayDate.getFullYear();

  
  const handleClick = () => {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setStartDate(day);
        setEndDate(startDate);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  const isInRange =
    startDate && endDate && day >= startDate && day <= endDate;

  const isStart = day === startDate;
  const isEnd = day === endDate;

  
  let background = "white";

  if (isStart) background = "#2563eb";
  else if (isEnd) background = "#1d4ed8";
  else if (isInRange) background = "#bfdbfe";

  return (
    <div
      onClick={handleClick}
      className="day-cell"
      style={{
        padding: "12px",
        borderRadius: "12px",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: "500",
        background,
        color: isStart || isEnd ? "white" : "#333",
        border: isToday ? "2px solid #2563eb" : "none",
        boxShadow:
          isStart || isEnd
            ? "0 4px 12px rgba(37,99,235,0.4)"
            : "0 2px 6px rgba(0,0,0,0.1)",
        transition: "all 0.2s ease"
      }}
    >
      {day}
    </div>
  );
}