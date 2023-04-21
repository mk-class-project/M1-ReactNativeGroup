import React from "react";
import { View, Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

const ThemeHandler = ({ handleThemeChange }) => {
  const handleCustomImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((response) => {
      if (response.path) {
        handleThemeChange("Custom", response.path);
      }
    });
  };

  return (
    <View>
      <Button title="Arnold" onPress={() => handleThemeChange("Arnold")} />
      <Button title="Ronnie" onPress={() => handleThemeChange("Ronnie")} />
      <Button title="Cbum" onPress={() => handleThemeChange("Cbum")} />
      <Button title="Custom" onPress={handleCustomImage} />
    </View>
  );
};

export default ThemeHandler;
