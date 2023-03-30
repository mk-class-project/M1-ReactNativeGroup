import React from 'react';

import { CalendarContainer, CalendarDay, DayText } from './styles';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <CalendarContainer>
      {daysOfWeek.map(day => (
        <CalendarDay key={day}>
          <DayText>{day}</DayText>
        </CalendarDay>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
