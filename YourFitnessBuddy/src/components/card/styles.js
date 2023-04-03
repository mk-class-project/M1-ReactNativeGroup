import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${props => props.theme.colorWhiteOpcaity};
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colorBlack};
`;

export const Type = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colorBlack};
`;

export const Body = styled.View`
  margin-bottom: 10px;
  color: ${props => props.theme.colorBlack};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${props => props.theme.colorBlack};
`;

export const Instructions = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colorBlack};
`;
