import React, { useState } from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { WeekContainer, Day, DayText, DayData, DaySeparator } from './styles';

const CalendarBox = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const calendarData = useSelector((state) => state.calendar);

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
        {Object.entries(calendarData).map(([day, exercises], index) => (
          <Day key={index} width={screenWidth}>
            <DayText selected={index === selectedDay}>{day}</DayText>
            <DaySeparator />
            <DayData>
              {exercises.map((exercise, index) => (
                <Text key={index} style={{ marginVertical: 5 }}>
                  {exercise.name}
                </Text>
              ))}
            </DayData>
          </Day>
        ))}
      </ScrollView>
    </WeekContainer>
  );
  
};

export default CalendarBox;
