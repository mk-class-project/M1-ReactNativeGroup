import React from "react";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import Calendar from "../../components/calendar";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";

import { useTranslation } from 'react-i18next';

const ProgramScreen = ({ navigation }) => {
    const theme = useTheme();
    const { t } = useTranslation();
    
    return (
        <Container>
        <BackgroundImage source={theme.image} resizeMode="cover">
            <Overlay />
            <Content>
            <Title>{t('menu.program')}</Title>
            <Calendar />
            </Content>
        </BackgroundImage>
        <AppNavigator navigation={navigation} />
        </Container>
    );
    }

export default ProgramScreen;