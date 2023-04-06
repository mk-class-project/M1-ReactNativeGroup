import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import { fetchExercises } from "../../api/routes";

import SearchBar from "../../components/searchBar";
import Card from "../../components/card";

import { useTranslation } from 'react-i18next';

import {
  Container,
  Overlay,
  Content,
  Title,
  BackgroundImage,
} from "../../global/styles/global.styles";

export default ExercisesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchResults = (results) => {
    setExercises(results);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const data = await fetchExercises();
      setExercises(data);
      setLoading(false);
    };

    fetchExercisesData();
  }, []);

  const renderItem = ({ item }) => {
    const isFavorite = favorites.some(favorite => favorite.name === item.name);

    const handleFavoritePress = async () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(item.name));
      } else {
        dispatch(addToFavorites(item));
      }
    };

    return (
      <Card
        key={item.name}
        name={item.name}
        type={item.type}
        muscle={item.muscle}
        equipment={item.equipment}
        difficulty={item.difficulty}
        instructions={item.instructions}
        isFavorite={isFavorite}
        onFavoritePress={handleFavoritePress}
      />
    );
  };

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>{t('title.getYouRipped')}</Title>
          <SearchBar onSearch={handleSearchResults} />
          {loading ? (
            <ActivityIndicator size="large" color={theme.colorWhite} />
          ) : (
            <FlatList
              data={exercises}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          )}
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};