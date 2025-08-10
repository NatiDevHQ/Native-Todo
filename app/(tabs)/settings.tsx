import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settingsScreen = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView>
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default settingsScreen;
