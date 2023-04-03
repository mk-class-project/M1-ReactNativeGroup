import styled from 'styled-components/native';

export const WeekContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Day = styled.View`
  width: ${(props) => props.width}px;
  flex: 1;
  align-items: center;
  padding: 16px;
`;

export const DayText = styled.Text`
  font-size: 24px;
  color: ${(props) => (props.selected ? 'blue' : 'black')};
  margin-bottom: 8px;
`;

export const DaySeparator = styled.View`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 8px;
`;

export const DayData = styled.Text`
  font-size: 16px;
`;
