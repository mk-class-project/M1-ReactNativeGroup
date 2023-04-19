import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useTranslation } from 'react-i18next';

const FavoriteButton = ({ isFavorite, onFavoriteChange }) => {
  const handleFavorite = () => {
    onFavoriteChange(!isFavorite);
  };

  const {t} = useTranslation();

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Text>{isFavorite ? t('favorites.removeFavorites') : t('favorites.addFavorites')}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
