import styled from 'styled-components/native';

export const CalendarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 16px;
  margin-top: 16px;
`;

export const CalendarDay = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
`;

export const DayText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

