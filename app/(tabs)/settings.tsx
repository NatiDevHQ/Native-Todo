import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import React, { useState } from "react";
import { Text, View } from "react-native";

const settingsScreen = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  return (
    <View>
      <Text>settings</Text>
    </View>
  );
};

export default settingsScreen;
