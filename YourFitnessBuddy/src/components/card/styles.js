import styled from 'styled-components/native';

export const CardContainer = styled.View`
background-color: #fff;
border-radius: 10px;
margin-bottom: 20px;
padding: 20px;
width: 90%;
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
`;

export const Type = styled.Text`
  font-size: 16px;
  color: #888;
`;

export const Body = styled.View`
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Instructions = styled.Text`
  font-size: 16px;
`;
