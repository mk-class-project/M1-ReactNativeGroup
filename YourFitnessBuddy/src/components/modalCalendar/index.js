import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import CalendarBox from '../calendar';
import { useDispatch } from 'react-redux';
import { updateCalendar } from '../../actions/calendar';

const ModalCalendar = ({ exercise, visible, onClose }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const dispatch = useDispatch();

  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleAddToCalendar = () => {
    selectedDays.forEach((day) => {
      dispatch(updateCalendar(day, exercise, 'add'));
    });
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
