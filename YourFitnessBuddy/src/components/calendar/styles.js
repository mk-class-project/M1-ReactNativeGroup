import styled from 'styled-components/native';

export const DayContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-horizontal: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const CalendarDayBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ isSelected }) => (isSelected ? '#007AFF' : 'white')};
  margin-bottom: 8px;
`;

export const DayBoxText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;

