import React, { useContext } from "react";
import { Container, Overlay, Content, Title, BackgroundImage, FriendlyButton } from "../../global/styles/global.styles";
import { useTheme } from "styled-components/native";
import AppNavigator from "../../components/appNavigator";
import ThemeHandler from "../../components/themeHandler";
import ThemeContext from "../../global/themeContext";
import { useTranslation } from 'react-i18next';
import { showMessage } from "react-native-flash-message";

export default OptionsScreen = ( {navigation} ) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const handleThemeChange = useContext(ThemeContext);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        showMessage({
            message: t('message.languageChanged'),
            type: "success",
            icon: "auto",
          });
    };

    const changeTheme = (theme, customImageUri) => {
        handleThemeChange(theme, customImageUri);
        showMessage({
          message: t('message.themeChanged'),
          type: "success",
          icon: "auto",
        });
      };

    return (
        <>
            <Container>
                <BackgroundImage source={theme.image} resizeMode="cover">
                    <Overlay />
                    <Content>
                    <Title>{t('menu.options')}</Title>
                    <FriendlyButton title={t('language.changeToEnglish')} onPress={() => changeLanguage('en')} />
                    <FriendlyButton title={t('language.changeToFrench')} onPress={() => changeLanguage('fr')} />
                    <ThemeHandler handleThemeChange={changeTheme} />
                    </Content>
                </BackgroundImage>
            </Container>
            <AppNavigator navigation={navigation} />
        </>
    );
};