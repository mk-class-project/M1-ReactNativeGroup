import React, { useState } from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { WeekContainer, Day, DayText, DayData, DaySeparator } from './styles';
import { FriendlyButton } from '../../global/styles/global.styles';
import { useTranslation } from 'react-i18next';
import { Share } from 'react-native';

const CalendarBox = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const { t } = useTranslation();
  const calendarData = useSelector((state) => state.calendar);

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollX / screenWidth);
    setSelectedDay(newIndex % daysOfWeek.length);
  };

  const shareCalendar = () => {
    const shareText = Object.entries(calendarData)
      .map(([day, exercises]) => {
        const exerciseList = Array.isArray(exercises)
          ? exercises.map((exercise) => exercise.name).join(', ')
          : '';
        return `${day}: ${exerciseList}`;
      })
      .join('\n');
  
    Share.share({
      message: shareText,
      title: 'My Fitness Program',
    });
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
              {Array.isArray(exercises) && exercises.map((exercise, index) => (
                <Text key={index} style={{ marginVertical: 5 }}>
                  {exercise.name} -
                </Text>
              ))}
            </DayData>
          </Day>
        ))}
       
      </ScrollView>
      <FriendlyButton title={t('menu.share')} onPress={shareCalendar} />
    </WeekContainer>
  );

};

export default CalendarBox;
