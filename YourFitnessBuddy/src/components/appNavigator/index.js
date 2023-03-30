import React, { useState, useContext } from 'react';
import { NavButton, NavContainer, NavButtonText, ModalButton, ModalContent, ModalOverlay } from './styles';

import ThemeHandler from '../themeHandler';
import ThemeContext from '../../global/themeContext';

const AppNavigator = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleThemeChange = useContext(ThemeContext);

  const handleNav = (page) => {
    navigation.navigate(page);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <NavContainer>
        <NavButton onPress={() => handleNav('home')}>
          <NavButtonText>Home</NavButtonText>
        </NavButton>
        <NavButton onPress={() => handleNav('exercises')}>
          <NavButtonText>Exercises</NavButtonText>
        </NavButton>
        <NavButton onPress={() => handleNav('favorites')}>
          <NavButtonText>Favorites</NavButtonText>
        </NavButton>
        <ModalButton onPress={toggleModal}>
          <NavButtonText>Change Theme</NavButtonText>
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
