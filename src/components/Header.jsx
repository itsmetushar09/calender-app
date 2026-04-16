export default function Header({ date, setDate }) {

  const prevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={prevMonth}>◀</button>

      <h3>
        {date.toLocaleString("default", { month: "long", year: "numeric" })}
      </h3>

      <button onClick={nextMonth}>▶</button>
    </div>
  );
}