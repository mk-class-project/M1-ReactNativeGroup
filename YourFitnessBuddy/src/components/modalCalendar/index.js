import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import CalendarBox from '../calendar';
import { useDispatch, useSelector } from 'react-redux';
import { updateCalendar } from '../../actions/calendar';

const ModalCalendar = ({ exercise, visible, onClose }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const dispatch = useDispatch();
  const calendarData = useSelector((state) => state.calendar.calendar);

  useEffect(() => {
    console.log("Updated calendar data: ", calendarData);
  }, [calendarData]);

  const handleDayToggle = (day) => {
    console.log("Toggling day:", day); // Add this line
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    console.log("Updated selectedDays:", selectedDays); // Add this line
  };
  

  const handleAddToCalendar = () => {
    console.log('Adding to calendar:', selectedDays, exercise);
    selectedDays.forEach((day) => {
      dispatch(updateCalendar(day, exercise, 'add'));
    });
    console.log("Dispatched updateCalendar action for days:", selectedDays);
    onClose();
  };
  
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <CalendarBox onDayPress={handleDayToggle} />
          <TouchableOpacity onPress={handleAddToCalendar}>
            <Text>Add to Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCalendar;
