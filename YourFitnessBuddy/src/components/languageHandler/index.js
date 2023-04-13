import React from "react";
import { View, Button } from "react-native";
import { useTranslation } from 'react-i18next';

const LanguageHandler = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View>
      <Button title={t('language.changeToEnglish')} onPress={() => changeLanguage('en')} />
      <Button title={t('language.changeToFrench')} onPress={() => changeLanguage('fr')} />
    </View>
  );
};

export default LanguageHandler;
