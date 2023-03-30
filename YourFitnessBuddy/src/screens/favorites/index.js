import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from "react-native-gesture-handler";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import Card from "../../components/card";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";

export default FavoritesScreen = ({ navigation }) => {
  const theme = useTheme();
  const [favorites, setFavorites] = useState([]);

  const fetchFavoritesData = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const favoriteKeys = keys.filter((key) => key.includes("favorite_"));
    const favoritesExercises = await AsyncStorage.multiGet(favoriteKeys);
    const parsedExercises = favoritesExercises.map(([key, value]) => JSON.parse(value));
    setFavorites(parsedExercises);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchFavoritesData();
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Card
      key={item.name}
      name={item.name}
      type={item.type}
      muscle={item.muscle}
      equipment={item.equipment}
      difficulty={item.difficulty}
      instructions={item.instructions}
      isFavorite={true}
      onFavoriteChange={(isFavorited) => {
        if (!isFavorited) {
          fetchFavoritesData();
        }
      }}
    />
  );

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>You love those exercises!</Title>
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};
