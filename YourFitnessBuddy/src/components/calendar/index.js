import React, { useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { WeekContainer, Day, DayText, DayData, DaySeparator } from './styles';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [selectedDay, setSelectedDay] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const sampleData = {
    Mon: 'Task A',
    Tue: 'Task B',
    Wed: 'Task C',
    Thu: 'Task D',
    Fri: 'Task E',
    Sat: 'Task F',
    Sun: 'Task G',
  };

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollX / screenWidth);
    setSelectedDay(newIndex % daysOfWeek.length);
  };

  return (
    <WeekContainer>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {daysOfWeek.map((day, index) => (
          <Day key={index} width={screenWidth}>
            <DayText selected={index === selectedDay}>{day}</DayText>
            <DaySeparator />
            <DayData>{sampleData[day]}</DayData>
          </Day>
        ))}
      </ScrollView>
    </WeekContainer>
  );
};

export default Calendar;
