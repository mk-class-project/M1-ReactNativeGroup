import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const DaysSelector = ({ selectedDays, onSelectedItemsChange }) => {
  const daysOfWeek = [
    { id: 'Mon', name: 'Monday' },
    { id: 'Tue', name: 'Tuesday' },
    { id: 'Wed', name: 'Wednesday' },
    { id: 'Thu', name: 'Thursday' },
    { id: 'Fri', name: 'Friday' },
    { id: 'Sat', name: 'Saturday' },
    { id: 'Sun', name: 'Sunday' },
  ];

  return (
    <SectionedMultiSelect
      items={daysOfWeek}
      uniqueKey="id"
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedDays}
      showChips={false}
      showCancelButton={true}
      showRemoveAll={false}
      selectText="Add to Days"
      IconRenderer={MaterialIcons}
    />
  );
};

export default DaysSelector;
