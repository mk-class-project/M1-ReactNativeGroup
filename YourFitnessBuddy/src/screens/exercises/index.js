import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { useTheme } from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage';

import AppNavigator from "../../components/appNavigator";
import { fetchExercises } from "../../api/routes";

import SearchBar from "../../components/searchBar";
import Card from "../../components/card";

import {
  Container,
  Overlay,
  Content,
  Title,
  BackgroundImage,
} from "../../global/styles/global.styles";

export default ExercisesScreen = ({ navigation }) => {
  const theme = useTheme();
  const [exercises, setExercises] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavoritesData = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const favoriteKeys = keys.filter((key) => key.includes("favorite_"));
      const favoritesExercises = await AsyncStorage.multiGet(favoriteKeys);
      const parsedExercises = favoritesExercises.map(([key, value]) => JSON.parse(value));
      setFavorites(parsedExercises);
    };

    fetchFavoritesData();
  }, []);

  const handleSearchResults = (results) => {
    setExercises(results);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const data = await fetchExercises();
      setExercises(data);
    };

    fetchExercisesData();
  }, []);

  const renderItem = ({ item }) => {
    const isFavorite = favorites.some(favorite => favorite.name === item.name);
    
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
      />
    );
  };

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>Let's Get You Jacked !</Title>
          <SearchBar onSearch={handleSearchResults} />
          <FlatList
            data={exercises}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};
