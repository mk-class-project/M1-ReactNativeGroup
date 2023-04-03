import React, { useState } from 'react';
import {
  CalendarContainer,
  DayContainer,
  CalendarDayBox,
  DayBoxText,
  HeaderText,
  DataContainer,
  DataText,
} from './styles';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [selectedDay, setSelectedDay] = useState(null);

  return (
      <CalendarContainer>
        <DayContainer>
          {daysOfWeek.map((day, index) => (
            <CalendarDayBox key={day} isSelected={selectedDay === index} onPress={() => setSelectedDay(index)}>
              <DayBoxText isSelected={selectedDay === index}>{day}</DayBoxText>
              <DataText>No data for this day.</DataText>
            </CalendarDayBox>
          ))}
        </DayContainer>
      </CalendarContainer>
  );
};

export default Calendar;

