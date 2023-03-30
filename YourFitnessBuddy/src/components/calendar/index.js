import React from 'react';

import { Calendar, CalendarDay, DayText } from './styles';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Calendar>
      {daysOfWeek.map(day => (
        <CalendarDay key={day}>
          <DayText>{day}</DayText>
        </CalendarDay>
      ))}
    </Calendar>
  );
};

export default Calendar;
