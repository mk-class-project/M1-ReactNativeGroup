import styled from 'styled-components/native';

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
