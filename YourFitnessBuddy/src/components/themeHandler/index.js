import React from "react";
import { View, Button } from "react-native";

const ThemeHandler = ({ handleThemeChange }) => {
  return (
    <View>
      <Button title="Arnold" onPress={() => handleThemeChange("Arnold")} />
      <Button title="Ronnie" onPress={() => handleThemeChange("Ronnie")} />
      <Button title="Cbum" onPress={() => handleThemeChange("Cbum")} />
    </View>
  );
};

export default ThemeHandler;
