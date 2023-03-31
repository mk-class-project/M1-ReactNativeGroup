import React, { useState } from 'react';
import {
  CalendarContainer,
  CalendarDay,
  DayText,
  DayContainer,
  CalendarDayBox,
  DayBoxText,
} from './styles';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <>
      <CalendarContainer>
        {daysOfWeek.map(day => (
          <CalendarDay key={day}>
            <DayText>{day}</DayText>
          </CalendarDay>
        ))}
      </CalendarContainer>
      <DayContainer>
        {daysOfWeek.map((day, index) => (
          <CalendarDayBox key={day} isSelected={selectedDay === index} onPress={() => setSelectedDay(index)}>
            <DayBoxText isSelected={selectedDay === index}>{day}</DayBoxText>
          </CalendarDayBox>
        ))}
      </DayContainer>
    </>
  );
};

export default Calendar;
