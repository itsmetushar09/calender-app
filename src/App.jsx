import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import NotesPanel from "./components/NotesPanel";

import hero from "./assets/hero.png";

function App() {
  const [date, setDate] = useState(new Date());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // 🎨 THEME COLORS (based on month)
  const month = date.getMonth();

  const themes = [
    "#f87171", "#fb923c", "#facc15",
    "#4ade80", "#38bdf8", "#818cf8",
    "#c084fc", "#f472b6", "#94a3b8",
    "#22c55e", "#0ea5e9", "#6366f1"
  ];

  const themeColor = themes[month];

  return (
    <div className="app-container">

      {/* 🎬 Animated Calendar Card */}
      <motion.div
        key={date.getMonth()}   // 🔥 important for flip
        className="calendar-card"
        style={{ "--theme-color": themeColor }}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* 🖼 HERO IMAGE */}
        <div className="image-section">
          <img src={hero} alt="calendar" />

          <div className="overlay">
            <h1>
              {date.toLocaleString("default", { month: "long" })}
            </h1>
            <p>{date.getFullYear()}</p>
          </div>
        </div>

        {/* 📦 CONTENT */}
        <div className="content-section">

          {/* 📌 HEADER */}
          <Header date={date} setDate={setDate} />

          {/* 📅 CALENDAR */}
          <CalendarGrid
            date={date}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />

          {/* 📝 NOTES */}
          <NotesPanel
            startDate={startDate}
            endDate={endDate}
            date={date}
          />

        </div>

      </motion.div>

    </div>
  );
}

export default App;