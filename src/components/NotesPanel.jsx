import { useState, useEffect } from "react";

export default function NotesPanel({ startDate, endDate, date }) {

  // Always define hooks FIRST (important rule)
  const [note, setNote] = useState("");

  // Stable key (better logic)
  const key = startDate
    ? `note-${date.getFullYear()}-${date.getMonth()}-${startDate}-${endDate || startDate}`
    : null;

  // Load note when key changes
  useEffect(() => {
    if (!key) return;

    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [key]);

  const saveNote = () => {
    if (!key) return;
    localStorage.setItem(key, note);
  };

  // UI when no date selected
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