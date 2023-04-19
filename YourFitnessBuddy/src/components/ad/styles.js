import styled from 'styled-components';

export const AdContainer = styled.View`
  background-color: #f5f5f5;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

export const AdImageStyled = styled.Image`
  width: 200px;
  height: 300px;
  margin-right: 10px;
`;

export const AdText = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const CloseButtonText = styled.Text`
  color: #777;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CountdownText = styled.Text`
  font-size: 16px;
`;

export const BigFriendlyButton = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 3px;
  margin-top: 10px;
`;