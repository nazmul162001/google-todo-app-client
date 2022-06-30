import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
  return (
    <div>
      <div className="calender w-full flex justify-center mt-3">
      <DayPicker />
      </div>
    </div>
  );
};

export default Calender;