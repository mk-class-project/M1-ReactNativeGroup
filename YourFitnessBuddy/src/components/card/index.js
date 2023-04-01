import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";

import { CardContainer, Header, Type, Title, Subtitle, Body, Instructions } from './styles';
import ModalCalendar from '../modalCalendar';

const Card = ({ name, type, muscle, equipment, difficulty, instructions, isFavorite, onFavoriteChange }) => {
  const [favorite, setIsFavorite] = useState(isFavorite);
  const [showModal, setShowModal] = useState(false);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <TouchableOpacity onPress={openModal}>
        <Text>Add to Calendar</Text>
      </TouchableOpacity>
      <ModalCalendar
        exercise={{ name, type, muscle, equipment, difficulty, instructions }}
        visible={showModal}
        onClose={closeModal}
      />
    </CardContainer>
  );
};

export default Card;
