import React from "react";
import { View } from "react-native";
import { ModalButton } from './styles';

const ThemeHandler = ({ handleThemeChange }) => {
  return (
    <View>
      <ModalButton title="Arnold" onPress={() => handleThemeChange("Arnold")} />
      <ModalButton title="Ronnie" onPress={() => handleThemeChange("Ronnie")} />
      <ModalButton title="Cbum" onPress={() => handleThemeChange("Cbum")} />
    </View>
  );
};

export default ThemeHandler;
