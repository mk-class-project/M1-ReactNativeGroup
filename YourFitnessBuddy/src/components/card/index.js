import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";
import { addExerciseToDay } from "../../actions/calendar";

import { CardContainer, Header, Type, Title, Subtitle, Body, Instructions } from './styles';
import { useTranslation } from 'react-i18next';

const Card = ({ name, type, muscle, equipment, difficulty, instructions, isFavorite, onFavoriteChange }) => {
  const [favorite, setIsFavorite] = useState(isFavorite);
  const dispatch = useDispatch();
  const [selectedDays, setSelectedDays] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    setIsFavorite(isFavorite);
  }, [isFavorite]);

  const daysOfWeek = [
    { id: 'Mon', name: 'Monday' },
    { id: 'Tue', name: 'Tuesday' },
    { id: 'Wed', name: 'Wednesday' },
    { id: 'Thu', name: 'Thursday' },
    { id: 'Fri', name: 'Friday' },
    { id: 'Sat', name: 'Saturday' },
    { id: 'Sun', name: 'Sunday' },
  ];

  const handleFavorite = async () => {
    setIsFavorite(!favorite);
    onFavoriteChange && onFavoriteChange(!favorite);

    if (!favorite) {
      dispatch(addToFavorites({
        name,
        type,
        muscle,
        equipment,
        difficulty,
        instructions,
      }));
    } else {
      dispatch(removeFromFavorites(name));
    }
  };

  const handleAddToDays = (selectedItems) => {
    const newDays = selectedItems.filter((day) => !selectedDays.includes(day));
    const removedDays = selectedDays.filter((day) => !selectedItems.includes(day));
  
    newDays.forEach(day => {
      dispatch(addExerciseToDay(day, { name, type, muscle, equipment, difficulty, instructions }));
    });
  
    removedDays.forEach(day => {
      dispatch(removeExerciseFromDay(day, name));
    });
  
    setSelectedDays(selectedItems);
  };
  

  return (
    <CardContainer>
      <Header>
        <Title>{name}<Type> - {type}</Type></Title>
      </Header>
      <Body>
        <Subtitle>{t('filter.muscle')}: {muscle}</Subtitle>
        <Subtitle>{t('filter.equipment')}: {equipment}</Subtitle>
        <Subtitle>{t('filter.difficulty')}: {difficulty}</Subtitle>
        <Instructions>{instructions}</Instructions>
      </Body>
      <TouchableOpacity onPress={handleFavorite}>
        <Text>{favorite ? t('favorites.addFavorites') : t('favorites.removeFavorites')}</Text>
      </TouchableOpacity>
      <SectionedMultiSelect
        items={daysOfWeek}
        uniqueKey="id"
        onSelectedItemsChange={handleAddToDays}
        selectedItems={selectedDays}
        showChips={false}
        showCancelButton={true}
        showRemoveAll={false}
        selectText={t('days.addDays')}
        IconRenderer={MaterialIcons}
      />
    </CardContainer>
  );
};

export default Card;
