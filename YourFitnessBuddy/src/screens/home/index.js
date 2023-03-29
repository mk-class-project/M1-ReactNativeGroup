import React, { useState, useEffect } from "react";
import { Button } from "react-native";

import { fetchInspirationalQuotes } from "../../api/routes";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";

import Quote from "../../components/quote";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "../../global/styles/global.styles";

const HomeScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const { handleThemeChange } = route.params;

  const [quotes, setQuote] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await fetchInspirationalQuotes();
      const quotesWithIds = res.map((quote, index) => {
        return { ...quote, id: index };
      });
      setQuote(quotesWithIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>Your Fitness Buddy</Title>
          <Subtitle>With {theme.title}</Subtitle>
          {quotes.length > 0 &&
            quotes.map((data) => {
              return <Quote key={data.id} author={data.author} quote={data.quote} />;
            })}
          <Button title="Get another quote" onPress={() => fetchQuotes()} />
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};

export default HomeScreen;
