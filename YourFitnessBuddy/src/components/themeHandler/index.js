import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { FriendlyButton } from "../../global/styles/global.styles";

const ThemeHandler = ({ handleThemeChange }) => {
  const { t } = useTranslation();

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
      <FriendlyButton title="Arnold" onPress={() => handleThemeChange("Arnold")} />
      <FriendlyButton title="Ronnie" onPress={() => handleThemeChange("Ronnie")} />
      <FriendlyButton title="Cbum" onPress={() => handleThemeChange("Cbum")} />
      <FriendlyButton title={t('menu.setTheme')} onPress={handleCustomImage} />
    </View>
  );
};

export default ThemeHandler;
