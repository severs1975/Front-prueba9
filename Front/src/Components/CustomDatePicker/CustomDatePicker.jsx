import React, { useState } from 'react';

const CustomDatePicker = ({ label, startDate, endDate, onSelect, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(startDate);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    onSelect(date);
  };

  const handleRangeChange = ({ startDate, endDate }) => {
    setSelectedDate(startDate);
    onChange({ startDate, endDate });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label>{label}</label>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(event) => handleSelectDate(new Date(event.target.value))}
      />
      <div style={{ display: 'flex', gap: 10 }}>
        <label>Fecha de inicio:</label>
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(event) => handleRangeChange({ startDate: new Date(event.target.value), endDate })}
        />
        <label>Fecha de fin:</label>
        <input
          type="date"
          value={endDate.toISOString().split('T')[0]}
          onChange={(event) => handleRangeChange({ startDate, endDate: new Date(event.target.value) })}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;


          /*
          <div>
            <CustomDatePicker
              label="Primer rango de fechas"
              startDate={startDate}
              endDate={endDate}
              onSelect={(date) => setStartDate(date)}
              onChange={handleSelectRange}
            />
            <CustomDatePicker
              label="Segundo rango de fechas"
              startDate={startDate}
              endDate={endDate}
              onSelect={(date) => setEndDate(date)}
              onChange={handleSelectRange}
            />
          </div>
          */
