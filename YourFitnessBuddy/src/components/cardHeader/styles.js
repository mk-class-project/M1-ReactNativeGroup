import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Type = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colorBlack};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colorBlack};
`;