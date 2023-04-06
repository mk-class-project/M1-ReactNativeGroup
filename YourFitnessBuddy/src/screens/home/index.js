import React, { useState, useEffect } from "react";
import { Button, ActivityIndicator } from "react-native";

import { fetchInspirationalQuotes } from "../../api/routes";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";

import Quote from "../../components/quote";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "../../global/styles/global.styles";

import { useTranslation } from 'react-i18n-next';

const HomeScreen = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const { handleThemeChange } = route.params;

  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const res = await fetchInspirationalQuotes();
      const quotesWithIds = res.map((quote, index) => {
        return { ...quote, id: index };
      });
      setQuote(quotesWithIds);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
       <Text>{t('language.changeLanguage')}</Text>
      <Button title={t('language.changeToEnglish')} onPress={() => changeLanguage('en')} />
      <Button title={t('language.changeToFrench')} onPress={() => changeLanguage('fr')} />
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>{t('title.yourFitnessBuddy')}</Title>
          <Subtitle>{t('message.with')} {theme.title}</Subtitle>
          {loading ? (
            <ActivityIndicator size="large" color={theme.colorWhite} />
          ) : (
            quotes.map((data) => {
              return <Quote key={data.id} author={data.author} quote={data.quote} />;
            })
          )}
          <Button title={t('message.getAnotherQuote')}  onPress={() => fetchQuotes()} />
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};

export default HomeScreen;
