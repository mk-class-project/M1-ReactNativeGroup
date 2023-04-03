import { ImageBackground } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colorGrey};
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.colorWhite};
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colorWhite};
  margin-bottom: 10px;
`;