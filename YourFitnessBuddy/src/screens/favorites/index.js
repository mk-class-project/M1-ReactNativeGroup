import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../actions/favorites";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import Card from "../../components/card";

import { Container, Overlay, Content, Subtitle, Title, BackgroundImage } from "../../global/styles/global.styles";

import { useTranslation } from 'react-i18next';

export default FavoritesScreen = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const {t} = useTranslation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { });

    return unsubscribe;
  }, [navigation]);

  const handleRemoveFromFavorites = (name) => {
    dispatch(removeFromFavorites(name));
  };

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
      onFavoritePress={() => {
        handleRemoveFromFavorites(item.name);
      }}
    />
  );

  return (
    <>
      <Container>
        <BackgroundImage source={theme.image} resizeMode="cover">
          <Overlay />
          <Content>
            <Title>{t('title.loveExercices')}</Title>
            {favorites.length > 0 ? (
              <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
              />
            ) : (
              <Subtitle style={{ color: theme.colorWhite }}>{t('message.noFavorites')}</Subtitle>
            )}
          </Content>
        </BackgroundImage>
      </Container>
      <AppNavigator navigation={navigation} />
    </>
  );
};