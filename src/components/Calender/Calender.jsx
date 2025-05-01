import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nowStr = now.toTimeString().slice(0, 5); // HH:MM
      if (alarmSet && nowStr === alarmTime) {
        alert('⏰ Alarm ringing!');
        setAlarmSet(false); // Reset after alarm
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [alarmTime, alarmSet]);

  return (
    <div className="calendar-container">
      <h3>📅 Calendar + Alarm</h3>
      <div className="calendar-wrapper">
        <Calendar onChange={setDate} value={date} />
        <p>Selected Date: <strong>{date.toDateString()}</strong></p>
      </div>

      <div className="alarm-section">
        <label>Set Alarm Time (HH:MM): </label>
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button onClick={() => setAlarmSet(true)}>Set Alarm</button>
        {alarmSet && <p>✅ Alarm set for {alarmTime}</p>}
      </div>
    </div>
  );
}

export default CalendarComponent;
