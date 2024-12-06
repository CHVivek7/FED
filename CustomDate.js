import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // DatePicker styles

function CustomDate() {
  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date

  const getDayName = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" }); // Extract day name
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Pick a Date</h2>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => setSelectedDate(date)} 
        placeholderText="Select a date"
        dateFormat="yyyy/MM/dd"
      />
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {selectedDate 
          ? `You selected: ${getDayName(selectedDate)}` 
          : "No date selected"}
      </div>
    </div>
  );
}

export default CustomDate;