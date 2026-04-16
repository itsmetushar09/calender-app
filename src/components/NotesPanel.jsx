import { useState, useEffect } from "react";

export default function NotesPanel({ startDate, endDate, date }) {

 
  const [note, setNote] = useState("");

  
  const key = startDate
    ? `note-${date.getFullYear()}-${date.getMonth()}-${startDate}-${endDate || startDate}`
    : null;


  useEffect(() => {
    if (!key) return;

    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [key]);

  const saveNote = () => {
    if (!key) return;
    localStorage.setItem(key, note);
  };

  
  if (!startDate) {
    return (
      <div className="notes-box">
        <h4>Select a date range to add notes</h4>
      </div>
    );
  }

  return (
    <div className="notes-box">
  <h3>
    {startDate
      ? `Notes for ${startDate} → ${endDate || "..."}`
      : "Select dates to add notes"}
  </h3>

  {startDate && (
    <>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something..."
      />

      <button onClick={saveNote}>Save</button>
    </>
  )}
</div>
  );
}