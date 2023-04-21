import styled from 'styled-components';

export const AdContainer = styled.View`
  background-color: #ffffff;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

export const AdImageStyled = styled.Image`
  width: 120px;
  height: 180px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

export const AdTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const AdDescription = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 3px;
`;

export const CloseButtonText = styled.Text`
  color: #777;
  font-size: 12px;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
