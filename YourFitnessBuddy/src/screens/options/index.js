import React, { useContext } from "react";

import { Button } from "react-native";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";
import { useTheme } from "styled-components/native";
import AppNavigator from "../../components/appNavigator";
import ThemeHandler from "../../components/themeHandler";
import ThemeContext from "../../global/themeContext";

import { useTranslation } from 'react-i18next';
import { ModalButton, AlignButton } from './styles';

export default OptionsScreen = ( {navigation} ) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const handleThemeChange = useContext(ThemeContext);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <Container>
                <BackgroundImage source={theme.image} resizeMode="cover">
                    <Overlay />
                    <Content>
                    <Title>{t('menu.options')}</Title>
                    <Title>{t('language.changeLanguage')}</Title>
                    <AlignButton>
                    <ModalButton title={t('language.changeToEnglish')} onPress={() => changeLanguage('en')} />
                    <ModalButton title={t('language.changeToFrench')} onPress={() => changeLanguage('fr')} />
                    </AlignButton>
                    <Title>{t('menu.changeTheme')}</Title>
                        <ThemeHandler handleThemeChange={handleThemeChange} />
                    </Content>
                </BackgroundImage>
            </Container>
            <AppNavigator navigation={navigation} />
        </>
    );
};