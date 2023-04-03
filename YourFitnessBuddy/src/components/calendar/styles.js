import styled from 'styled-components/native';

export const CalendarContainer = styled.View`
  flex-direction: column;
  width: 95%;
  height: 50%;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const CalendarWeek = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #CCCCCC;
`;

export const CalendarDay = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const DayText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  text-align: left;
`;

export const DayContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  border-top-width: 1px;
  border-color: #CCCCCC;
`;

export const CalendarDayBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.isSelected ? "#007FFF" : "white"};
`;

export const DayBoxText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.isSelected ? "white" : "black"};
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const DataContainer = styled.View`
  margin-top: 32px;
`;

export const DataText = styled.Text`
  font-size: 16px;
  color: #999999
`;