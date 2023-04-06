import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const FavoriteButton = ({ isFavorite, onFavoriteChange }) => {
  const handleFavorite = () => {
    onFavoriteChange(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Text>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
