import React, { useState, useContext } from 'react';
import { NavButton, NavContainer, NavButtonText, ModalButton, ModalContent, ModalOverlay, DropdownContainer, DropdownItem, } from './styles';

import ThemeHandler from '../themeHandler';
import ThemeContext from '../../global/themeContext';
import LanguageHandler from '../languageHandler';

import { useTranslation } from 'react-i18next';

const AppNavigator = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleThemeChange = useContext(ThemeContext);

  const { t } = useTranslation();

  const handleNav = (page) => {
    navigation.navigate(page);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <NavContainer>
        <NavButton onPress={() => handleNav('home')}>
          <NavButtonText>{t('menu.home')}</NavButtonText>
        </NavButton>
        <NavButton onPress={toggleDropdown}>
          <NavButtonText>{t('menu.workouts')}</NavButtonText>
        </NavButton>
        {dropdownVisible && (
        <DropdownContainer>
          <DropdownItem onPress={() => handleNav('exercises')}>
            <NavButtonText>{t('menu.exercises')}</NavButtonText>
          </DropdownItem>
          <DropdownItem onPress={() => handleNav('program')} last>
            <NavButtonText>{t('menu.program')}</NavButtonText>
          </DropdownItem>
        </DropdownContainer>
      )}
        <NavButton onPress={() => handleNav('favorites')}>
          <NavButtonText>{t('menu.favorites')}</NavButtonText>
        </NavButton>
        <NavButton onPress={toggleDropdown}>
          <NavButtonText>{t('menu.options')}</NavButtonText>
        </NavButton>
        {dropdownVisible && (
        <DropdownContainer>
          <DropdownItem onPress={() => handleNav('changeTheme')}>
            <NavButtonText>{t('menu.changeTheme')}</NavButtonText>
          </DropdownItem>
          {modalVisible && (
        <ModalOverlay onPress={toggleModal}>
          <ModalContent>
            <ThemeHandler handleThemeChange={handleThemeChange} />
          </ModalContent>
        </ModalOverlay>
      )}
          <DropdownItem onPress={() => handleNav('changeLanguage')} last>
            <NavButtonText>{t('language.changeLanguage')}</NavButtonText>
          </DropdownItem>
          {modalVisible && (
        <ModalOverlay onPress={toggleModal}>
          <ModalContent>
            <LanguageHandler/>
          </ModalContent>
        </ModalOverlay>
      )}
        </DropdownContainer>
      )}
      </NavContainer>
    </>
  );
};

export default AppNavigator;
