import styled from 'styled-components/native';

export const NavContainer = styled.View`
  position: relative;
  zIndex: 10;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: black;
  padding: 0 20px;
  width: 100%;
`;

export const NavButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: black;
`;

export const NavButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ModalButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 5px;
`;

export const ModalOverlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: none;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
`;