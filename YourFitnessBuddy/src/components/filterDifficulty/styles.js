import styled from 'styled-components';

// styles
export const SearchContainer = styled.View`
  width: 85%;
  margin: 10px;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  width:70%;
  background-color: grey;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.Button``;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;