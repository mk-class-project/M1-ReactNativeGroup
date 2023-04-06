import React, { useState, useContext } from 'react';
import { NavButton, NavContainer, NavButtonText, ModalButton, ModalContent, ModalOverlay, DropdownContainer, DropdownItem, } from './styles';

import ThemeHandler from '../themeHandler';
import ThemeContext from '../../global/themeContext';

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
        <ModalButton onPress={toggleModal}>
          <NavButtonText>{t('menu.changeTheme')}</NavButtonText>
        </ModalButton>
      </NavContainer>
      {modalVisible && (
        <ModalOverlay onPress={toggleModal}>
          <ModalContent>
            <ThemeHandler handleThemeChange={handleThemeChange} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default AppNavigator;
