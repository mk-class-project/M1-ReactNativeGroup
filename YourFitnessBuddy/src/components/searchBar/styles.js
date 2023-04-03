import styled from 'styled-components';

export const SearchContainer = styled.View`
  width: 90%;
  margin: 10px;

`;

export const SearchInput = styled.TextInput`
  height: auto;
  width: auto;
  background-color: ${props => props.theme.colorWhite};
  padding-horizontal: 10px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.Button``;

export const Text = styled.Text`
  color: ${props => props.theme.colorWhite};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputGroup = styled.View`
  background-color: ${props => props.theme.colorBlockOpacity};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioLabel = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const RadioText = styled.Text`
  color: ${props => props.theme.colorWhite};
  font-size: 16px;
  margin-left: 8px;
`;