import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";
import { addExerciseToDay } from "../../actions/calendar";

import { CardContainer, Header, Type, Title, Subtitle, Body, Instructions } from './styles';

const Card = ({ name, type, muscle, equipment, difficulty, instructions, isFavorite, onFavoriteChange }) => {
  const [favorite, setIsFavorite] = useState(isFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(isFavorite);
  }, [isFavorite]);

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

  const handleAddToDay = (index, value) => {
    const day = value;
    dispatch(addExerciseToDay(day, { name, type, muscle, equipment, difficulty, instructions }));
  };

  return (
    <CardContainer>
      <Header>
        <Title>{name}<Type> - {type}</Type></Title>
      </Header>
      <Body>
        <Subtitle>Muscle: {muscle}</Subtitle>
        <Subtitle>Equipment: {equipment}</Subtitle>
        <Subtitle>Difficulty: {difficulty}</Subtitle>
        <Instructions>{instructions}</Instructions>
      </Body>
      <TouchableOpacity onPress={handleFavorite}>
        <Text>{favorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
      </TouchableOpacity>
      <ModalDropdown
        options={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        onSelect={handleAddToDay}
        defaultValue="Add to Day"
      />
    </CardContainer>
  );
};

export default Card;
