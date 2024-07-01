import React from "react";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import { addDays, subDays } from "date-fns";
import "./CustomCalendar.css"


const CustomCalendar = () => {
  const today = new Date();
  const startDate1 = new Date(today.getFullYear(), today.getMonth(), 2);
  const endDate1 = new Date(today.getFullYear(), today.getMonth(), 10);
  const startDate2 = new Date(today.getFullYear(), today.getMonth(), 20);
  const endDate2 = new Date(today.getFullYear(), today.getMonth(), 23);

  const isInRange = (date, start, end) => date >= start && date <= end;

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        { "start": startDate1, "end": endDate1 }
      ]
    },
    {
      "react-datepicker__day--highlighted-custom-2": [
        { "start": startDate2, "end": endDate2 }
      ]
    }
  ];

  return (
    <div className="calendar-container">
      <DatePicker
        inline
        highlightDates={highlightWithRanges}
      />
    </div>
  );
};

export default CustomCalendar;
