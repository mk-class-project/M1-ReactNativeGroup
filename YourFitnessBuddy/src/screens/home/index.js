import React, { useState, useEffect } from "react";
import { Button, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotesSuccess } from "../../actions/quote";
import { fetchInspirationalQuotes } from "../../api/routes";
import { useTheme } from "styled-components/native";
import AppNavigator from "../../components/appNavigator";
import Quote from "../../components/quote";
import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "../../global/styles/global.styles";
import { useTranslation } from 'react-i18next';
import notifee from '@notifee/react-native';

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const res = await fetchInspirationalQuotes();
      const quotesWithIds = res.map((quote, index) => {
        return { ...quote, id: index };
      });
      setLoading(false);
      dispatch(fetchQuotesSuccess(quotesWithIds));

      const randomQuoteIndex = Math.floor(Math.random() * quotesWithIds.length);
      const randomQuote = quotesWithIds[randomQuoteIndex].quote;
      displayQuoteNotification(randomQuote);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const displayQuoteNotification = async (quote) => {
    const channelId = await notifee.createChannel({
      id: 'quote-channel',
      name: 'Quote Channel',
    });

    await notifee.displayNotification({
      title: 'Inspirational Quote',
      body: quote,
      android: {
        channelId,
      },
    });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const sendQuoteNotification = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex].quote;
    displayQuoteNotification(randomQuote);
  };

  return (
    <Container>
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
          <Button title={t('message.sendQuoteNotification')} onPress={() => sendQuoteNotification()} />
        </Content>
      </BackgroundImage>
      <AppNavigator navigation={navigation} />
    </Container>
  );
};

export default HomeScreen;
