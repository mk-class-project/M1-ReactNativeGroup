import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../actions/favorites";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import Card from "../../components/card";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";

export default FavoritesScreen = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

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
